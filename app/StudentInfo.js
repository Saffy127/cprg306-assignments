import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h2>Isaac Saffran</h2>
      <p>Course Section: CPRG 306 F</p>
      <Link href="https://github.com/Saffy127" passHref>GitHub Repository</Link>
    </div>
  );
};

export default StudentInfo;
