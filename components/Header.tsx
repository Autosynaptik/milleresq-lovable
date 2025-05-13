
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
            <button className={styles.signInButton} onClick={() => signOut()}>
              Sign Out
            </button>
            <div className={styles.userIcon}>
              {session.user?.image ? (
                <img src={session.user.image} alt="User" width="24" height="24" />
              ) : (
                <i className="bi bi-person-circle"></i> // Use Bootstrap Icon
              )}
            </div>
          </>
        ) : (
          <button className={styles.signInButton} onClick={() => signIn('google')}>
            <i className="bi bi-google"></i> Sign In
          </button>
        )}
      </div>
    </header>
  );
}
