import React from 'react';

export default function Contact() {
  return (
    <div className='d-flex justify-content-center'>
      <div className='col-sm-5 shadow p-3 mb-5 bg-body rounded mt-2'>
        <div>
          <div class="mb-3">
            <h1 className='text-center'>Contact</h1>
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email address"/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Comments</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Please fill out your comments or concerns.'></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
