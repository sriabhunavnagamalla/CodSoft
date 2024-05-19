var l=1;
function expandGrid(){
    var container = document.getElementById("griid");
    if(l==1)
    {
        container.innerHTML+= '<div class="box"><a href="https://en.wikipedia.org/wiki/Kawasaki_motorcycles"><img class="crs" src="data/kawasaki.jpg" alt="kawasaki"><div class="tover"><br>KAWASAKI</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/KTM_390_series"><img class="crs" src="data/ktm 390.jpg" alt="ktm390"><div class="tover"><br>KTM 390</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/KTM_200_Duke"><img class="crs" src="data/ktm rc 200.jpg" alt="ktmrc200"><div class="tover"><br>KTM RC 200</div></a></div>';
        l+=1;
    }
    else if(l==2)
    {
        container.innerHTML+= '<div class="box"><a href="https://en.wikipedia.org/wiki/File:OLA_Electric_scooter_manufacturing_unit.jpg"><img class="crs" src="data/ola s1.jpg" alt="ola"><div class="tover"><br>OLA</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/Bajaj_Pulsar"><img class="crs" src="data/pulsar.jpg" alt="pulsar"><div class="tover"><br>PULSAR</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/Royal_Enfield"><img class="crs" src="data/royal-enfiled-bullet350.jpg" alt="royal enfiled"><div class="tover"><br>ROYAL ENFILED</div></a></div>';
        l+=1;
    }
    else if(l==3)
    {
        container.innerHTML+= '<div class="box"><a href="https://en.wikipedia.org/wiki/Maruti_Suzuki"><img class="crs" src="data/suzuki-access-125.jpg" alt="suzuki"><div class="tover"><br>SUZUKI</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/TVS_Motor_Company"><img class="crs" src="data/tvs.jpg" alt="tvs"><div class="tover"><br>TVS</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/Yamaha_Motor_Company"><img class="crs" src="data/yamaha mt.jpg" alt="yamaha"><div class="tover"><br>YAMAHA</div></a></div>';
        l+=1;
    }
    else
    {
        alert('More COntent will be added Soon. Stay Tuned:)');
    }
}
function sub(){
    alert('Form Sent')
}