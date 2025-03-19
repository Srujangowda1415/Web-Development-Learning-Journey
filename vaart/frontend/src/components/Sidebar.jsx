import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

export default function Sidebar({ users }) {
  return (
    <Box sx={{ width: 250, p: 2, bgcolor: "grey.100", height: "100vh" }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Online Users
      </Typography>
      <List>
        {users.length > 0 ? (
          users.map((user, index) => (
            <ListItem key={index}>
              <ListItemText primary={user} />
            </ListItem>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary">
            No users online
          </Typography>
        )}
      </List>
    </Box>
  );
}
