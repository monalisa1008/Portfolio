setInterval()


clocktime = new Date();{
hour= clocktime.getHours();
min= clocktime.getMinutes();
sec= clocktime.getSeconds();


hour_rotation = 30* hour + min/2;
min_rotation = 6* min;
sec_rotation= 6*sec;

hour.style.transform= `rotate($(hour_rotation)deg)`
min.style.transform= `rotate($(min_rotation)deg)`
sec.style.transform= `rotate($(sec_rotation)deg)`
}