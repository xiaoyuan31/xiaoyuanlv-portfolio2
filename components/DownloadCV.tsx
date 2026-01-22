// components/DownloadCV.tsx
export default function DownloadCV() {
  return (
    <section id="download-cv" className="max-w-3xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Download My CV</h2>
      <p className="text-gray-600 mb-6">
        Check out my full profile, experience, and projects by downloading my CV.
      </p>

      <a
        href="https://drive.google.com/file/d/1T8stmQmjh2RAwtsp3e5x_g-WUApbmwMV/view?usp=sharing" // Place your CV file in the public folder
        download
        className="inline-block bg-white text-white font-semibold py-3 px-6 rounded-md transition-colors"
      >
        Download CV
      </a>
    </section>
  );
}
