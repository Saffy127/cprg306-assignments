import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div className="center-content">
      <h2>Isaac Saffran</h2>
      <p>Course Section: CPRG 306 F</p>
      <Link href="https://github.com/Saffy127">
        <a>GitHub Repository</a>
      </Link>
    </div>
  );
};

export default StudentInfo;
