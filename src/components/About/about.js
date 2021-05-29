import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <div>
    <header class="py-5">
        <div class="container px-lg-5">
            <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
                <div class="m-4 m-lg-5">
                    <h1 class="display-5 fw-bold">A warm welcome!</h1>
                    <p class="fs-4">Here, I created a website that fetches Rick&Morty characters, and a little bit of details about them.</p>
                    <p class="fs-4">Click on each of the characters to see a little bit more info on them.</p>
                </div>
            </div>
        </div>
    </header>
    </div>
  );
};

export default About;
