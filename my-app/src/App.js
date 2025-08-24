import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./COMPONENTS/Header";
import Footer from "./COMPONENTS/Footer";
import AppointmentForm from "./COMPONENTS/AppointmentForm";
import Button from "./COMPONENTS/Button";
import Card from "./COMPONENTS/Card";
import ChatBox from "./COMPONENTS/ChatBox";
import DoctorList from "./COMPONENTS/DoctorList";
import EmergencyButton from "./COMPONENTS/EmergencyButton";
import HealthStats from "./COMPONENTS/HealthStats";
import Loader from "./COMPONENTS/Loader";
import LoginForm from "./COMPONENTS/LoginForm";
import Map from "./COMPONENTS/Map";
import Modal from "./COMPONENTS/Modal";
import Notification from "./COMPONENTS/Notification";
import PatientProfile from "./COMPONENTS/PatientProfile";
import RegisterForm from "./COMPONENTS/RegisterForm";
import SearchBar from "./COMPONENTS/SearchBar";

import { AuthProvider } from "./COMPONENTS/AuthContext";
import ProtectedRoute from "./COMPONENTS/ProtectedRoute";

function App() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <AuthProvider>
      <Header links={navLinks} />

      <div style={{ minHeight: "80vh", padding: "20px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Welcome to My App</h1>
                <SearchBar />

                <Card title="Doctor Information">
                  <DoctorList />
                </Card>

                <Card title="Map">
                  <Map />
                </Card>

                <Card title="Loader Example">
                  <Loader />
                </Card>

                {/* Example protected button */}
                <ProtectedRoute>
                  <Button text="Click Me" onClick={() => alert("Button Clicked!")} />
                </ProtectedRoute>
              </>
            }
          />

          <Route
            path="/appointments"
            element={
              <ProtectedRoute>
                <AppointmentForm />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <PatientProfile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/healthstats"
            element={
              <ProtectedRoute>
                <HealthStats />
              </ProtectedRoute>
            }
          />

          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <ChatBox />
                <Notification />
              </ProtectedRoute>
            }
          />

          <Route
            path="/emergency"
            element={
              <ProtectedRoute>
                <EmergencyButton />
              </ProtectedRoute>
            }
          />

          <Route
            path="/modal-example"
            element={
              <ProtectedRoute>
                <Modal>
                  <p>This is inside a modal.</p>
                </Modal>
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          {/* Add other public or about/contact pages here */}
        </Routes>
      </div>

      <Footer />
    </AuthProvider>
  );
}

export default App;

