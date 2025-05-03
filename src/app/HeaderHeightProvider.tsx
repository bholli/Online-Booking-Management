'use client';

export default function HeaderHeightProvider() {
  return (
    <style jsx global>{`
      :root {
        /* Default header height for mobile */
        --header-height: 70px;
      }

      /* Tablet header height */
      @media (min-width: 768px) {
        :root {
          --header-height: 80px;
        }
      }

      /* Desktop header height */
      @media (min-width: 1024px) {
        :root {
          --header-height: 89px;
        }
      }
    `}</style>
  );
} 