import Link from 'next/link';
import StudentInfo from './StudentInfo';

const Page = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href="/week2"><a>Week 2</a></Link>
      <Link href="/week3"><a>Week 3</a></Link>
    </div>
  );
};

export default Page;
