import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

function ListProjects({ changeTheme }) {

  const [projects, setProjects] = useState(null);

  async function getProjects() {
    try {
      const response = await api.get('/projects');
      console.log(response.data.projects);
      setProjects(response.data.projects);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <h1>Projects</h1>
      {
        projects?.map(project => (
          <Link key={project._id} to={{ pathname: `/project/${project._id}` }}>{project.title}</Link>
        ))
      }
    </>
  );

}

export default ListProjects;
