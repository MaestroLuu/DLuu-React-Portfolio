import React from 'react';
import ProfilePic from './profilePic.jpg';

const styles = {
    photo: {
        width: "200px",
    }
}

export default function About() {
    return (
        <div className="container-fluid .ms-1 .me-1 row">
                <h1 className='text-center'>About Me</h1>
            <div className='col-sm-2 p-3 mb-5 bg-body rounded'>
                <img src={ProfilePic} className="img-thumbnail shadow" style={styles.photo} alt="Profile Picture" />
            </div>
            <div className='col-sm-10 p-3 mb-5 bg-body rounded'>
                <p>For the past decade, I've worked in the field of education, both in adminstration and 
                    as a general education teacher. The profession of being an instructor was always
                    fulfilling as I had the privilege to observe young minds develop and realize their potentials. I
                    enjoyed knowing that I was able to play a role in their lives, but moreso that I had the opportunity to act 
                    as a mentor and direct them to pathways that they never thought possible for themselves.
                    However, due to the recent pandemic, teachers are now pressured even more to work beyond the
                    scope of their responsibilities. Educational budgets are reduced, but responsibilities are increased 
                    and expectations are higher now than before. As a result, I had to retire from this career for my own personal
                    wellbeing. That's why I'm here today.</p>
                <p>I'm a full time father and my new drive to succeed derives from my devotion to my family's
                    wellbeing. Technology is evergrowing and as a result, I wanted
                    to be a part of that change. I still am nervous about these decisions and aware that there are
                    various challenges and barriers to my success. However, I
                    am determined to overcome these obstacles and become a front-end web developer.</p>
            </div>
        </div>
    );
}