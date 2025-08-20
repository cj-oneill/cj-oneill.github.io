---
layout: page
title: Ohia SAR Research
description: An Ecological Synthetic-aperature Radar Application
img: assets/img/ohia/capellaXband.png
importance: 2
category: Academic
---

<h2> Introduction </h2>
The dominant and cornerstone tree species of Hawai'i is the Ohia, <i>Metrosideros polymorpha</i>. Hundreds of endemic flora and fauna are completely reliant on it for survival. In the early 2010s, many of these trees were seen dying rapidly and their leaves browning. The cause of this was found to be a fungal pathogens, <i>Ceratocystis lukuohia</i> and <i>C. huliohia</i>, commonly called Rapid Ohia Death (ROD). The current distribution of ROD is shown below.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ohia/ohia_area.jpg" title="ROD Spread Big Island" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ohia/ohia_kauai.jpg" title="ROD Spread Kauai" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ohia/ohia_oahu.jpg" title="ROD Spread Oahu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    ROD distribution on the Big Island, Oahu, and Kaua'i
</div>

The current method of tracking the distribution of ROD is via airborne flyovers which take place ~1/365days due to the high resources necessary.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ohia/airborneLines.png" title="Airborne Lines" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ohia/airborneImgOhia.jpg" title="Pilot ROD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Airborne flight lines 2016-2021 and pilot performing ROD obervations.
</div>

The 365 day observation windows leave large gaps for improvement. If satellites had the capability to detect changes in Ohia health, the time between detections could drop from 365 days to a single day, a 99.7% time reduction. I am researching the feasability of a certain type of Radar system called Synthetic-aperature Radar for ROD detection. SAR can "see" through clouds, observe during nighttime, and detect incredibly small changes in the observed object. 

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ohia/capellaXband.png" title="CapellaSAR" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ohia/iiwi.jpg" title="Iiwi" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Capella X-band SAR and the endemic 'I'iwi on an Ohia.
</div>

To determine the feasibility of this technology, I am simulating the forest canopy and its reflection. In June, I submitted a paper with <a href= https://www.colorado.edu/aerospace/sean-peters>Dr. Sean Peters</a> to the <a href= https://www.bing.com/search?q=aiaa%20scitech&qs=n&form=QBRE&sp=-1&lq=0&pq=20aiaa%20scitech&sc=9-14&sk=&cvid=D86FE8B8ABA245F6AAD6E475AF81EB37>2026 AIAA SciTech Forum</a> detailing how the changed reflectivity between healthy and infected trees is significant enough for SAR detection.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ohia/OHIA_SIM.pdf" title="Ohia Sim" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ohia/OHIA_SAR.pdf" title="Ohia SAR" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A 2D relfecitivy map of simulated Ohia canopy with brown trees representing ROD, and green trees representing healthy Ohia. Dark squares show low reflectivity while white squares represent high reflectivity.
</div>

Now I am working on a drastically improved simulation which takes into account a 3D scene with a real satellite path simulating transmitted pulse and reception from the scene.

<div class="row">
    <div class = "col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ohia/terrain_3d.png" title="Terrain 3D" class="img-fluid rounded z-depth-1" %}
    <div>
</div>