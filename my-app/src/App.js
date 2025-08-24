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

import "./App.css";

function App() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Appointments", href: "/appointments" },
    { label: "Health Stats", href: "/healthstats" },
    { label: "Chat", href: "/chat" },
    { label: "Emergency", href: "/emergency" },
    { label: "Profile", href: "/profile" },
  ];

  return (
    <AuthProvider>
      <div className="App">
        <Header links={navLinks} />

        <main className="App-main">
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <div className="App-hero">
                      <h1>Welcome to CARECONNECT</h1>
                      <p>Your trusted healthcare partner for comprehensive medical services and support.</p>
                      <Button 
                        text="Get Started" 
                        variant="secondary" 
                        size="lg" 
                        onClick={() => window.location.href = '/appointments'}
                      />
                    </div>

                    <div className="App-grid">
                      <div className="App-section">
                        <h2>Find Doctors</h2>
                        <SearchBar />
                        <Card title="Available Doctors">
                          <DoctorList />
                        </Card>
                      </div>

                      <div className="App-section">
                        <h2>Healthcare Services</h2>
                        <Card title="Appointment Booking">
                          <p>Schedule your appointments with our qualified healthcare professionals.</p>
                          <Button 
                            text="Book Appointment" 
                            variant="primary" 
                            onClick={() => window.location.href = '/appointments'}
                          />
                        </Card>
                        
                        <Card title="Emergency Care">
                          <p>Immediate medical assistance when you need it most.</p>
                          <Button 
                            text="Emergency Help" 
                            variant="danger" 
                            onClick={() => window.location.href = '/emergency'}
                          />
                        </Card>
                      </div>

                      <div className="App-section">
                        <h2>Health Monitoring</h2>
                        <Card title="Health Statistics">
                          <HealthStats />
                        </Card>
                        
                        <Card title="Location Services">
                          <Map />
                        </Card>
                      </div>
                    </div>

                    {/* Example protected content */}
                    <ProtectedRoute>
                      <div className="App-section">
                        <h2>Your Dashboard</h2>
                        <Card title="Quick Actions">
                          <Button 
                            text="View Profile" 
                            variant="outline" 
                            onClick={() => window.location.href = '/profile'}
                          />
                          <Button 
                            text="Start Chat" 
                            variant="outline" 
                            onClick={() => window.location.href = '/chat'}
                            className="ml-sm"
                          />
                        </Card>
                      </div>
                    </ProtectedRoute>
                  </>
                }
              />

              <Route
                path="/appointments"
                element={
                  <ProtectedRoute>
                    <div className="App-section">
                      <h2>Schedule Appointment</h2>
                      <AppointmentForm />
                    </div>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <div className="App-section">
                      <h2>Patient Profile</h2>
                      <PatientProfile />
                    </div>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/healthstats"
                element={
                  <ProtectedRoute>
                    <div className="App-section">
                      <h2>Health Statistics</h2>
                      <HealthStats />
                    </div>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/chat"
                element={
                  <ProtectedRoute>
                    <div className="App-section">
                      <h2>Online Consultation</h2>
                      <ChatBox />
                      <Notification />
                    </div>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/emergency"
                element={
                  <ProtectedRoute>
                    <div className="App-section">
                      <h2>Emergency Services</h2>
                      <EmergencyButton />
                    </div>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/modal-example"
                element={
                  <ProtectedRoute>
                    <div className="App-section">
                      <h2>Modal Example</h2>
                      <Modal>
                        <p>This is inside a modal component with professional styling.</p>
                      </Modal>
                    </div>
                  </ProtectedRoute>
                }
              />

              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              
              {/* Additional pages */}
              <Route
                path="/about"
                element={
                  <div className="App-section">
                    <h2>About CARECONNECT</h2>
                    <p>We are dedicated to providing exceptional healthcare services with cutting-edge technology and compassionate care.</p>
                  </div>
                }
              />
              
              <Route
                path="/contact"
                element={
                  <div className="App-section">
                    <h2>Contact Us</h2>
                    <p>Reach out to our support team for any questions or concerns.</p>
                  </div>
                }
              />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;

