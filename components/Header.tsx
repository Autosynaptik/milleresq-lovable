
import React from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from '../styles/Header.module.css';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        YourLogo
      </Link>
      <div className={styles.rightSection}>
        {session ? (
          <>
            <span className={styles.email}>{session.user?.email}</span>
            <button className={styles.signInButton} onClick={() => signOut()}>Sign Out</button>
            <div className={styles.userIcon}>
              {session.user?.image ? (
                <img src={session.user.image} alt="User" width="24" height="24" />
              ) : (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              )}
            </div>
          </>
        ) : (
          <button className={styles.signInButton} onClick={() => signIn('google')}>Sign In</button>
        )}
      </div>
    </header>
  );
}
