import React, {useState} from 'react';
import '../../App.css';

export default function AboutUs() {
  const [abouts, setAbouts] = useState([
    {
      title:'Who are we?',
      text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ab architecto non quas minus expedita neque corporis, vitae quos animi facilis deleniti, molestiae temporibus esse fuga ipsa id totam eius harum a obcaecati recusandae. Aperiam nostrum minus quod aliquam. Ducimus a nulla dolores cum excepturi ipsam veritatis, nemo aspernatur deserunt tempora numquam. Ut, optio. Molestias iusto ut voluptatum a earum repellendus eum nesciunt minima, recusandae id blanditiis accusamus deleniti saepe voluptates velit distinctio maiores voluptate ipsam, porro impedit quasi. Autem.'
    },
    {
      title:'Where can you fly?',
      text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ab architecto non quas minus expedita neque corporis, vitae quos animi facilis deleniti, molestiae temporibus esse fuga ipsa id totam eius harum a obcaecati recusandae. Aperiam nostrum minus quod aliquam. Ducimus a nulla dolores cum excepturi ipsam veritatis, nemo aspernatur deserunt tempora numquam. Ut, optio. Molestias iusto ut voluptatum a earum repellendus eum nesciunt minima, recusandae id blanditiis accusamus deleniti saepe voluptates velit distinctio maiores voluptate ipsam, porro impedit quasi. Autem.'
    },
    {
      title:'Why choose us?',
      text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ab architecto non quas minus expedita neque corporis, vitae quos animi facilis deleniti, molestiae temporibus esse fuga ipsa id totam eius harum a obcaecati recusandae. Aperiam nostrum minus quod aliquam. Ducimus a nulla dolores cum excepturi ipsam veritatis, nemo aspernatur deserunt tempora numquam. Ut, optio. Molestias iusto ut voluptatum a earum repellendus eum nesciunt minima, recusandae id blanditiis accusamus deleniti saepe voluptates velit distinctio maiores voluptate ipsam, porro impedit quasi. Autem.'
    }
  ])
  return (
    <div className="about-us">
      <div className="container">
      <div className="about">
        <h1 className="page-title">About Us</h1>
        <ul className="about-body">
        {
          abouts.map((about,index) => (
            <li key = {index}>
              <h2>{about.title}</h2>
              <p>{about.text}</p>
            </li>
          ))
        }
          
        </ul>
      </div>
      </div>
    </div>
  );
}