import React from 'react'
//import {Link} from 'react-router-dom'
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
        <footer className="footer mt-auto py-3" style={{ backgroundColor: 'lightgray', textAlign: 'center' }}>
          <div>
            <div className="container">
              <span>© {currentYear} Oluwadamilola Ajayi</span>
            </div>
        </div>
      </footer>
    </div>
  )
}