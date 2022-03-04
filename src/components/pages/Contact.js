import React from 'react';

export default function Contact() {
  return (
    <div className='d-flex justify-content-center'>
      <h1 className='text-center'>Contact</h1>
      <div className='col-sm-5 shadow p-3 mb-5 bg-body rounded mt-2'>
        <div className="card">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
