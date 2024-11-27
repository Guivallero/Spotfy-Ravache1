.disc-list-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.list-title {
  text-align: center;
  color: #333;
  font-size: 28px;
  margin-bottom: 20px;
}

.disc-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.disc-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 200px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.disc-card:hover {
  transform: scale(1.05);
}

.disc-title {
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
}

.disc-year {
  font-size: 16px;
  color: #777;
}

.disc-cover {
  border-radius: 8px;
  margin: 10px 0;
}

.disc-artist {
  font-size: 16px;
  color: #555;
  margin-top: 10px;
}

.loading,
.error {
  text-align: center;
  font-size: 18px;
  color: #555;
}

.error {
  color: #dc3545;
}
