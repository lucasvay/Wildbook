
import React from "react";
import Progress from './Progress';
import { Link } from 'react-router-dom';

export default function Projects () {


    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '400px',
        padding: '20px',
    
    }}>
        <div style={{
            width: '45%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
    }}>
            <h1 style={{                
                fontSize: '4em',
            }}>
                View your
            </h1>
            <h1 style={{                
                fontSize: '4em',
            }}>
                projects
            </h1>
        </div>
        <div style={{
            width: '45%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '20px',
        }}>
           
                <Progress 
                    name='Amphibians & Reptiles' 
                    encounters = '126' 
                    progress='25'
                    href='/projects/projectList.jsp'
                    noUnderline
                    newTab
                    />         
           
                <Progress 
                    name='Seal' 
                    encounters = '12' 
                    progress='12'
                    href='/projects/projectList.jsp'
                    noUnderline
                    newTab
                    />             
           
                <Progress 
                        name='Seal' 
                        encounters = '12' 
                        progress='12'
                        href='/projects/projectList.jsp'
                        noUnderline
                        newTab
                        />
          

        </div>

    </div>



}