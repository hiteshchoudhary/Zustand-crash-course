import './App.css';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

function App() {
  return (
    <div className="main-container">
      <h1 style={{
        fontSize: "2.5rem",
        marginBottom: "2rem"
      }}> My Course list</h1>
      <CourseForm/>
      <CourseList/>
    </div>
  );
}

export default App;
