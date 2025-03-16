import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #121212;
  color: #ffffff;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  width: 300px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #1e1e1e;
  color: white;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #6200ea;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #3700b3;
  }
`;

const ShortUrl = styled.p`
  margin-top: 20px;
  font-size: 1.2rem;
  word-break: break-all;
`;

const App = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async () => {
    if (!inputUrl) return;
    try {
      const response = await fetch("http://localhost:5000/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longUrl: inputUrl }),
      });
      const data = await response.json();
      setShortUrl(data.shortUrl);
    } catch (error) {
      console.error("Error shortening URL", error);
    }
  };

  return (
    <Container>
      <Title>🔗 URL Shortener</Title>
      <Input
        type="text"
        placeholder="Enter a URL"
        value={inputUrl}
        onChange={(e) => setInputUrl(e.target.value)}
      />
      <Button onClick={handleShorten}>Shorten URL</Button>
      {shortUrl && <ShortUrl>Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></ShortUrl>}
    </Container>
  );
};

export default App;
