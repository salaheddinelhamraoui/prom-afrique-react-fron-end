// react
import React, { useEffect, useState } from 'react';

// third-party
import { Link } from 'react-router-dom';
// application
import Megamenu from './Megamenu';
import Menu from './Menu';
import { ArrowRoundedRight6x9Svg } from '../../svg';

const axios = require('axios');

function DepartmentsLinks() {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/categories?populate=*`)
      .then((response) => {
        // handle success
        setDepartments(response.data.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }, []);

  const linksList = departments.map((department, index) => {
    let itemClass = '';

    return (
      <li key={index} className={`departments__item ${itemClass}`}>
        <Link to={department.attributes.slug}>
          {department.attributes.titre}
        </Link>
      </li>
    );
  });

  return <ul className="departments__links">{linksList}</ul>;
}

export default DepartmentsLinks;
