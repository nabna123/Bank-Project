import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Requestedform.css';
import data from './Data';
import quest from'./Questions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


function Requestform() {
  
  const [file, setFile] = useState(null);
  const [formdata,setFormdata]=useState({
    branchCode:'',
    branchName:'',
    customerName:'',
    customerAccountNumber:'',
    customerAccountType:'',

  });

  const [showUpload, setShowUpload] = useState(false);
 const [showNextContainer , setShowNextContainer] = useState(false)

  const [questions, setQuestion] = useState(quest);
  
  const [showNextCont, setShowNextCont] = useState(false);
  const displaynext = () => {
    setShowNextCont(true); 
  };
  
  const handleAnswerChange = (index, selectedAnswer) => {
  if (index >= 0 && index < quest.length) {
    const question = quest[index];
   
    if (quest[index].answer === selectedAnswer) {
      const updated = [...quest];
      updated[index].answers = selectedAnswer;
      if (updated[index + 1]) {
        updated[index + 1].isVisible = true;
      }
      if(index===questions.length-1){
        setShowUpload(true)
      }
      setQuestion(updated);
    } else {
      alert("Please Select Correct Answer");
    }
  }
};

  const filteredData = data.filter(
    (item) => item.customeraccountnumber === formdata.customerAccountNumber
  );
  
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormdata((draft) => ({ ...draft, [name]: value }));
    console.log(e);
  };
  function upload(){
  
    localStorage.setItem('formData', JSON.stringify(formdata));
    localStorage.setItem('questions',JSON.stringify(questions))
    setFile(null);
    setShowUpload(false);
   setShowNextContainer(true);
    alert('Upload Successfully');
    
  }
  const [nextFormData,setNextFormData]=useState({
    dateOfComplaint:'',
    dateOfOccurrenceOfIncident:'',
    dateOfidentificationOfIncident:'',
    debitGL:'',
    briefDescriptionOfTheIncident:'',
    resonForCompensation:'',
    compensationClaimed:'',
    todos:'',
  })
  function SubmitData(){
   localStorage.setItem('formData', JSON.stringify(formdata));
   localStorage.setItem('questions',JSON.stringify(questions));
   localStorage.setItem('nextFormData',JSON.stringify(nextFormData));
   
   localStorage.setItem('todos', JSON.stringify(todos));
  }

useEffect(() => {
  const localData = JSON.parse(localStorage.getItem('formData'));

  if (localData) {
    setFormdata(localData);
  }
}, []);
  



function check() {
    if (formdata.customerAccountNumber.length === 15) {
      const localStorageData = JSON.parse(localStorage.getItem('formdata')) || [];
      const filteredData = data.filter((item) => item.customeraccountnumber === formdata.customerAccountNumber);
       const combinedData = [...localStorageData, ...filteredData];
      
    } else {
      alert('wrong account number');
    }
  }
  


  
  
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.ms-excel', 'image/jpeg', 'image/png'];
    
    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      setFile(null);
      alert("Invalid file type. Please upload a PDF, DOC, Excel, or an image.");
    }
  };
  
  
  if(formdata.customerAccountNumber.length === 15){
    check();
  }
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [edit, setEdit] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addForm = (event) => {
    event.preventDefault();
    if (inputValue !== '') {
      if (edit !== null) {
        const updatedTodos = [...todos];
        updatedTodos[edit] = inputValue;
        setTodos(updatedTodos);
        setEdit(null);
      } else {
        setTodos([...todos, inputValue]);
      }
      setInputValue('');
    }
  };
  const editForm = (index) => {
    setInputValue(todos[index]);
    setEdit(index);
  };

  const deleteform = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    if (edit === index) {
      setEdit(null);

      setInputValue('');
    }
  };
  return (
    <div className='container'>
      <div className='dd'>
        <div className='link'>
          <Link to='/' className='dash'>
            <h4>Dashboard</h4>
          </Link>
          <h4>/ REQUEST FORM</h4>
        </div>
      </div>
      <div className='hh'>
        <div className='head_requestform'>
          <h2>REQUEST FORM</h2>
        </div>
      </div>
      <div className='container1'>
        <div className='grid'>
          <div className='gg'>
          <div className='code'>
            <label>Branch Code*</label>
            <br />
            <input
              id='inp'
              type='text'
              name='branchCode'
              // placeholder='ALP'
               value={formdata.branchCode}
          
              onChange={(e)=>handlechange(e)}
          
            />
          </div>
          <div className='code'>
            <label>Branch Name*</label>
            <br />
            
            <input id='inp' 
            type='text' 
            placeholder='Branch Name'
            name='branchName'
            value={formdata.branchName}
            onChange={(e)=>handlechange(e)} />
          </div>
          <div className='code'>
            <label>Customer Name*</label>
            <br />
            <input id='inp'
            
            type='text' 
            placeholder='Customer Name' 
            name='customerName'
            value={formdata.customerName}
            onChange={(e)=>handlechange(e)}/>
          </div>
          <div className='code'>
            <label>Customer Account Number*</label>
            <br />
            <input
              id='inp'
              type='number'
              placeholder='Customer Account Number'
              name='customerAccountNumber'
              value={formdata.customerAccountNumber}
              onChange={(e)=>handlechange(e)}
            />
          </div>
          <div className='code'>
            <label>Customer Account Type*</label>
            <br />
            <select id='inp'>
              <option>---Select---</option>
              <option value='SA' name='customerAccountType' onChange={(e)=>handlechange(e)}>SA</option>
              <option value='CA' name='customerAccountType' onChange={(e)=>handlechange(e)}>CA</option>
              <option value='SA-NRI' name='customerAccountType' onChange={(e)=>handlechange(e)}>SA-NRI</option>
              <option value='SA-NRO' name='customerAccountType' onChange={(e)=>handlechange(e)}>SA-NRO</option>
            </select>
          </div>
          </div>
 
          {filteredData.length > 0 && (
        <div className='tabledata'>
          <h3>Previous Approved Compensation Claims</h3>
          <table>
            <thead>
              <tr>
                <th>Requested On</th>
                <th>Branch Name</th>
                <th>Compensation</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            { filteredData.map((item) =>  (
                <tr key={item.id}>
                  <td>{item.requestedOn}</td>
                  <td>{item.branchname}</td>
                  <td>{item.compensation}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className='dd'>
  
           
        {questions.map((question, index) => {
        return (
          <>
            {question.isVisible && (
              <div  key={index}>
                <div className='qn'>
                <div className='q1'>
                <p>{question.text}</p>
                </div>
                <div className='an1'>
                <label>
                  <input
                    type="radio"
                    value="Yes"
                    checked={question.answers}
                    onChange={() => handleAnswerChange(index, true)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    checked={
                      question.answers != null ? !question.answers : null
                    }
                    onChange={() => handleAnswerChange(index, false)} 
                  />
                  No
                </label>
                </div>
                </div>
              </div>
            )}
          </>
        );
      })}
          
          
          </div>
         
             { showUpload &&(
            
            <div className="file">
              <label>Please upload your compensation letter</label>
              <input type="file" onChange={handleFileChange} />
              <button className='upload' onClick={upload}>Upload</button>
            <ul>
              <li className='move'>Upload a maximum of live files</li>
              <li className='move'>Each with a minimum size of 2 MP</li>
              <li className='move'>Allowed file types of doc,pdf and exel</li>
            </ul>
                        </div>
                     
          )}
          {showNextContainer && (
            <div className='press'>
          <button className='btn1' onClick={displaynext}>
           Press to continue
          </button>
          </div>
          )}
        </div>
        
      </div>
      {showNextCont &&(
      <div className='nextcont'>
        <div className='ll'>
          <div className='grid1'>
          <div className='cx'>
          <label>Date of Complaint(DD/MM/YYYY)</label><br/>
          <input className='inp' type='date'id='in' placeholder='dd-mm-yyy'></input>
          </div>
          <div className='cx'>
          <label>Date of occurrence of incident(DD/MM/YYYY)</label><br/>
          <input type='date'id='in' placeholder='dd-mm-yyyy'></input>
          </div>
          <div className='cx'>
          <label>Date of identification of incident (DD/MM/YYYY)</label><br/>
          <input type='date'id='in' placeholder='dd-mm-yyyy'></input>
          </div>
          <div className='cx'>
          <label>Debit GL a/c</label><br/>
          <input type='number'id='in' placeholder='516141108'></input>
          </div>
          <div className='cx'>
         <label>Brief Description of the incident *</label><br/>
         <textarea id='in1'rows="4" cols="55"> </textarea>
           </div>
           <div className='cx'>
         <label>Reason for Compensation *</label><br/>
         <textarea id='in1'rows="4" cols="55"> </textarea>
           </div>
           <div className='cx'>
          <label>Compensation Claimed (Rs)*</label><br/>
          <input type='number'id='in' placeholder='Compensation Claimed (Rs)'></input>
          </div>
          <div className='cx'>
           <label>Attachment</label><br/>
           <input type='file'id='in'></input>
           </div>


           <div className='todo'>
      <div className='todo1'>Recommender Name*</div>
    
      <form onSubmit={addForm}>
         <input type="text" placeholder="enter your To do" value={inputValue} onChange={handleInputChange}/>
        {/* <button type="submit">{edit !== null ? 'Update' : 'Add'}</button>  */}
      </form>
      <div className='list'>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo} 
             {/* <FontAwesomeIcon icon={faEdit} id='icon1' onClick={() => editForm(index)} /> */}
              <FontAwesomeIcon icon={faTrash} id='icon2' onClick={() => deleteform(index)}  />
            </li>
          ))}
        </ul>
      </div>
    </div>
<div className='subbutt'>
    <button className='submit' onClick={SubmitData}>Submit</button>   
    </div>
         </div>
        
        </div>
       
     
   
       
       
       </div>
        )}
    </div>
  );
}

export default Requestform;
