import { useState } from "react";
import styles from "../styles/Find.module.css";

interface SearchResult {
  title: string;
  artist: string;
}

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearchByName = () => {
    const mockResults = [
      { title: "Bohemian Rhapsody", artist: "Queen" },
      { title: "Imagine", artist: "John Lennon" },
      { title: "Hotel California", artist: "Eagles" },
    ];
    setResults(
      mockResults.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    );
  };

  const handleSearchByLocation = () => {
    const mockResults = [
      { title: "Music Concert", artist: "Local Band" },
      { title: "Art Exhibition", artist: "Gallery" },
      { title: "Food Festival", artist: "City Center" },
    ];
    setResults(
      mockResults.filter((item) =>
        item.artist.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchWrapper}>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Enter search query..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <i
          className="bi bi-geo-alt locationIcon"
          style={{ fontSize: "24px", marginRight: "0.5rem", cursor: "pointer" }}
          onClick={() => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  const latitude = position.coords.latitude;
                  const longitude = position.coords.longitude;
                  setSearchQuery(`${latitude.toFixed(2)}, ${longitude.toFixed(2)}`);
                },
                (error) => {
                  console.error("Error getting location:", error);
                  alert("Unable to retrieve your location");
                }
              );
            } else {
              alert("Geolocation is not supported by your browser");
            }
          }}
        ></i>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.actionButton} onClick={handleSearchByName}>
          Find by Name
        </button>
        <button
          className={styles.actionButton}
          onClick={handleSearchByLocation}
        >
          Find by Location
        </button>
      </div>

      <div className={styles.results}>
        {results.map((result, index) => (
          <div key={index} className={styles.resultItem}>
            <div className={styles.songInfo}>
              <div className={styles.title}>{result.title}</div>
              <div className={styles.artist}>{result.artist}</div>
            </div>
            <div className={styles.actions}>
              <button className={styles.actionButton}>Sing</button>
              <button className={styles.actionButton}>Save</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
