* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: system-ui, "Noto Sans Thai", sans-serif;
  line-height: 1.6;
  color: #222;
  background: #fafafa;
}

header {
  text-align: center;
  padding: 3rem 1rem;
  background: #2563eb;
  color: white;
}

main {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.gallery img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

button {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

footer {
  text-align: center;
  padding: 2rem;
  color: #666;
}