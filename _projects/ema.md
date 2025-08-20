---
layout: page
title: emirates mission to the asteroid belt
description: my time as an undergraduate researcher
img: assets/img/ema/EMA_forDark.png
importance: 2
category: academic
giscus_comments: false
---

In May of 2023 I was wrapping up my freshman year, eager to dip my hands into aerospace research. During finals week, I got the call that I had been given the job offer for Spacecraft Systems Engineer at the Laboratory for Atmospheric and Space Physics. "I remember the excitement I felt when I received the job offer and of course accepted. I've been at LASP working on the Emirates Mission to the Asteroid Belt (EMA) for two and a half years now. This experience is a foundational part of my education and has truly changed the trajectory of my life.


<h2> Mission Introduction </h2>
<div class="row">
    <div class="col-sm mt-2 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ema/EMA_forDark.png" title="EMA" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-2 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ema/lasp_logo.png" title="LASP" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The Emirates Mission to the Asteroid Belt, a joint project between the Laboratory for Atmospheric and Space Physics (LASP) and the United Arab Emirates Space Agency (UAESA).
</div>

EMA is a deep-space interplanetary mission developed in a partnership with LASP and the UAE Space Agency. The spacecraft will flyby six asteroids and enter into orbit about the seventh. To do this, gravity assists will be performed at Venus, Mars, and Earth.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ema/justitia.jpg" title="justitia" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Justitia, the ultimate destination of the Emirates Mission to the Asteroid Belt.
</div>


<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/ema/venus.jpg" title="venus" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/ema/earth.jpg" title="earth" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/ema/mars.jpg" title="mars" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The three gravity assist bodies: Venus, Earth, and Mars. 
</div>

By visiting these asteroids with advanced remote sensing technology, we hope to contribute to further develop human understanding of asteroids and the history of our solar system. EMA is planned to launch in 2028.

<h2> Involvement </h2>

As a spacecraft systems engineer, it is crucial to be able to trace connections between each aspect of the spacecraft. Our team ensures that separate subteams such as power, thermal, and communication are all cognizant of each other's needs and limitations. To do this, I created interface documentation and led team-wide reviews for transparency.

My work recently has transitioned from hardware to simulation, where I develop high-fidelity simulations to inform the concept of operations and spacecraft design. 

In April 2025, I presented my paper, "Modeling Trajectory and Attitude to Optimize Baffle Design for the Optical Navigation System of the Emirates Mission to the Asteroid Belt" at the AIAA Region V Student Conference. 

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/ema/Stud_AIAA.jpg" title="Student Presentation AIAA" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/ema/CJ_AIAA.jpg" title="CJ AIAA" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/ema/Pres_AIAA.jpg" title="Presentation AIAA" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    AIAA Region V Student Conference, University of Minnesota, April, 2025.
</div>

This research detailed a geometric stray-light analysis using spacecraft and planetary ephemerides (position and velocity). I developed attitude algorithms to calculate the spacecraft's orientation about each of the target asteroids. This information informed baffle (similar to a camera lens hood) design for the optical navigation camera on the spacecraft. Judges evaluated the papers and presentations of the attendees, and I was awarded 1st place in the undergraduate category.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ema/1stplace.jpg" title="AIAA Award" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    1st place, Undergraduate Division, AIAA Region V Student Conference.
</div>

After attending the conference, I moved from geometric analyses using Matlab and JPL's Spice to using a full-dynamics astrodynamics simulation framework, Basilisk. Developed by the AVS Lab at CU Boulder, Basilisk's open-source modular framework allows for incredible precision without necessitating missions to develop the same modeling tools over and over. I'm now working on producing simulations which use the software that the spacecraft will actually run on in space. This, along with dynamics calculations at 100Hz, allows for creation of unprecedented scenario modeling for the mission. I am currently working on producing gravity assist scenarios, trajectory correction maneuvers, and day-in-the-life during proximity operations. The information produced from these scenarios is given to international instrument teams, subsystems, and mission systems team to develop flight rules and procedures.
