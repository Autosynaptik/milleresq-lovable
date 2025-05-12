
import { useState } from 'react';
import styles from '../styles/Find.module.css';

interface SearchResult {
  title: string;
  artist: string;
}

export default function Find() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  // Simulated search results - replace with actual API call
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const mockResults = [
      { title: 'Bohemian Rhapsody', artist: 'Queen' },
      { title: 'Yesterday', artist: 'The Beatles' },
      { title: 'Hotel California', artist: 'Eagles' },
    ].filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.artist.toLowerCase().includes(query.toLowerCase())
    );
    setResults(mockResults);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.searchBar}
        placeholder="Search for songs..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
      
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
