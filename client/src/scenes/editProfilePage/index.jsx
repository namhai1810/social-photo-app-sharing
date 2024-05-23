import { Box, Button, TextField, useMediaQuery, Snackbar, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "scenes/navbar";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";

const EditProfilePage = () => {
  const [user, setUser] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navigate = useNavigate();

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3001/users/edit/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      setSnackbar({ open: true, message: "Profile updated successfully", severity: "success" });
      navigate(`/profile/${userId}`);
    } else {
      setSnackbar({ open: true, message: "Failed to update profile", severity: "error" });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  if (!user) return null;

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={user._id} picturePath={user.picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
        
          <form onSubmit={handleSubmit}>
            <TextField
              label="First Name"
              name="firstName"
              value={user.firstName}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={user.lastName}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              label="Location"
              name="location"
              value={user.location}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Occupation"
              name="occupation"
              value={user.occupation}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Linkedin"
              name="linkedIn"
              value={user.linkedIn}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Twitter"
              name="twitter"
              value={user.twitter}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            {/* Add more fields as necessary */}
            <Box display="flex" justifyContent="flex-end" mt="2rem">
              <Button type="submit" variant="contained" color="primary">
                Save Changes
              </Button>
            </Box>
          </form>
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <Box m="2rem 0" />
            <FriendListWidget userId={user._id} />
          </Box>
        )}
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default EditProfilePage;
