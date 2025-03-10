import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import styles from "./dashboard.module.css";

const PrivateRoute = ({ children }) => {
  const userId = localStorage.getItem("userId");
  console.log("🔵 [PrivateRoute] Checking userId:", userId ? "Present" : "Missing");
  return userId ? children : <Navigate to="/login" replace />;
};

function App() {
  const [notes, setNotes] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinnedNotes, setPinnedNotes] = useState(new Set());
  const [originalOrder, setOriginalOrder] = useState([]);
  const [error, setError] = useState(null); // Added for error handling
  const navigate = useNavigate(); // Added for navigation

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      verifyUser(userId);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const verifyUser = async (userId) => {
    try {
      const response = await fetch("https://note-taking-backend-wkmm.onrender.com/api/auth/verify", {
        method: "GET",
        headers: {
          "User-ID": userId,
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (result.valid) {
        setIsAuthenticated(true);
        fetchNotes(userId);
      } else {
        localStorage.removeItem("userId");
        setIsAuthenticated(false);
        navigate("/login"); // Redirect to login on invalid user
      }
    } catch (error) {
      console.error("Error verifying user:", error);
      localStorage.removeItem("userId");
      setIsAuthenticated(false);
      navigate("/login"); // Redirect to login on error
    }
  };

  const fetchNotes = async (userId) => {
    try {
      const response = await fetch("https://note-taking-backend-wkmm.onrender.com/api/notes", {
        method: "GET",
        headers: {
          "User-ID": userId,
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (response.ok) {
        setNotes(result.notes || []);
        setOriginalOrder(result.notes.map((note) => note._id));
        setPinnedNotes(new Set(result.notes.filter((note) => note.pinned).map((note) => note._id)));
        setError(null); // Clear any previous errors
      } else {
        setError(result.message || "Failed to fetch notes.");
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
      setError("Failed to fetch notes. Please try again later.");
    }
  };

  const handleLoginSuccess = () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setIsAuthenticated(true);
      fetchNotes(userId);
    }
  };

  const addNote = async (newNote) => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    try {
      const response = await fetch("https://note-taking-backend-wkmm.onrender.com/api/notes", {
        method: "POST",
        headers: {
          "User-ID": userId,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      const result = await response.json();
      if (response.ok) {
        setNotes((prevNotes) => [...prevNotes, result.note]);
        setOriginalOrder((prevOrder) => [...prevOrder, result.note._id]);
        setError(null); // Clear any previous errors
      } else {
        setError(result.message || "Failed to add note.");
      }
    } catch (error) {
      console.error("Error adding note:", error);
      setError("Failed to add note. Please try again.");
    }
  };

  const deleteNote = async (id) => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    try {
      const response = await fetch(`https://note-taking-backend-wkmm.onrender.com/api/notes/${id}`, {
        method: "DELETE",
        headers: {
          "User-ID": userId,
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (response.ok) {
        setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
        setPinnedNotes((prev) => {
          const newSet = new Set(prev);
          newSet.delete(id);
          return newSet;
        });
        setOriginalOrder((prevOrder) => prevOrder.filter((noteId) => noteId !== id));
        setError(null); // Clear any previous errors
      } else {
        setError(result.message || "Failed to delete note.");
      }
    } catch (error) {
      console.error("Error deleting note:", error);
      setError("Failed to delete note. Please try again.");
    }
  };

  const handlePin = async (id, isPinned) => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    try {
      const response = await fetch(`https://note-taking-backend-wkmm.onrender.com/api/notes/${id}`, {
        method: "PUT",
        headers: {
          "User-ID": userId,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pinned: isPinned }),
      });

      const result = await response.json();
      if (response.ok) {
        setPinnedNotes((prev) => {
          const newSet = new Set(prev);
          if (isPinned) {
            newSet.add(id);
          } else {
            newSet.delete(id);
          }
          return newSet;
        });
        setError(null); // Clear any previous errors
      } else {
        setError(result.message || "Failed to update pin status.");
      }
    } catch (error) {
      console.error("Error updating pin status:", error);
      setError("Failed to update pin status. Please try again.");
    }
  };

  const sortedNotes = [...notes].sort((a, b) => {
    const aIsPinned = pinnedNotes.has(a._id);
    const bIsPinned = pinnedNotes.has(b._id);

    if (aIsPinned && !bIsPinned) return -1;
    if (!aIsPinned && bIsPinned) return 1;
    const aIndex = originalOrder.indexOf(a._id);
    const bIndex = originalOrder.indexOf(b._id);
    return aIndex - bIndex;
  });

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/login"
        element={
          !isAuthenticated ? <Login onLoginSuccess={handleLoginSuccess} /> : <Navigate to="/dashboard" replace />
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <div className={styles.dashboard}>
              <Header />
              <div className={styles.createArea}>
                <CreateArea onAdd={addNote} />
              </div>
              {error && <div className={styles.error}>{error}</div>} {/* Display error if present */}
              <div className={styles.notesContainer}>
                {sortedNotes.map((note) => (
                  <Note
                    key={note._id}
                    id={note._id}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                    onPin={handlePin}
                  />
                ))}
              </div>
              <Footer />
            </div>
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/signup" replace />} /> {/* Updated to redirect to /signup */}
    </Routes>
  );
}

export default App;