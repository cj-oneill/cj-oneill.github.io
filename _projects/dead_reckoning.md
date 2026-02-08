---
layout: page
title: Undead Reckoning
description: A GNSS-denied autonomous sensor-fusion aircraft
img: assets/img/deadreckoning/logo.png
importance: 3
category: Academic
---

GNSS-denied unmanned aircraft systems are in increasing demand over the last decade. Dead reckoning is the term used for determining positon and orientation of a vehicle without GNSS signals. Typical solutions utilize high precision IMUs (inertial measurement units) consisting of accelerometers and gyroscopes by integrating twice to derive position. No group has created a fixed-wing aircraft capable of dead reckoning successfully with positional errors less than 2%. 

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deadreckoning/plane.png" title="Plane" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deadreckoning/imu.png" title="IMU" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Fixed wing aircraft and inertial measurement unit.
</div>

By utilizing novel navigation alogorithms, our team will equip the aicraft with a unique sensor suite: monocular camera, laser rangefinder, tactical-grade IMU, flight controller, and a Jetson computer. This sensor fusion strategy relies on subsequently processing camera images and tracking object motion within the frames. By integrating height data via the laser rangefinder, and positional estimates from the IMU, high precision pose estimates may be determined. 

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deadreckoning/cam.jpg" title="Camera" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deadreckoning/lrf.png" title="Laser rangefinder" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Camera and laser rangefinder.
</div>

By combining these inputs, we use visual and inertial sources to perform point tracking (odometry), and this method is aptly named visual-inertial odometry (VIO).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deadreckoning/vio.jpg" title="UAV VIO" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    UAV VIO example.
</div>
