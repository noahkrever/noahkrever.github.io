function scrollSmoothToBottom (id) {
    var div = document.getElementById(id);
    $('#' + id).animate({
       scrollTop: div.scrollHeight - div.clientHeight
    }, 500);
 }
function showAll() {

    document.getElementById('numpy').style.display = 'block';
    document.getElementById('pandas').style.display = 'block';
    document.getElementById('matplotlib').style.display = 'block';
    document.getElementById('seaborn').style.display = 'block';
    document.getElementById('plotly').style.display = 'block';
    document.getElementById('scikit-learn').style.display = 'block';
    document.getElementById('jupyter').style.display = 'block';
    document.getElementById('modeling').style.display = 'block';
    document.getElementById('oracle').style.display = 'block';
    document.getElementById('aws').style.display = 'block';
    document.getElementById('sql').style.display = 'block';
    document.getElementById('postgresql').style.display = 'block';
    document.getElementById('mysql').style.display = 'block';
    document.getElementById('sqlite').style.display = 'block';
    document.getElementById('dbeaver').style.display = 'block';
    document.getElementById('excel').style.display = 'block';
    document.getElementById('python').style.display = 'block';
    document.getElementById('django').style.display = 'block';
    document.getElementById('java').style.display = 'block';
    document.getElementById('html').style.display = 'block';
    document.getElementById('css').style.display = 'block';
    document.getElementById('javascript').style.display = 'block';
    document.getElementById('matlab').style.display = 'block';
    document.getElementById('labview').style.display = 'block';
    document.getElementById('imagej').style.display = 'block';
    document.getElementById('latex').style.display = 'block';
    document.getElementById('word').style.display = 'block';
    document.getElementById('powerpoint').style.display = 'block';

    document.getElementById('math').style.display = 'block';
    document.getElementById('stats').style.display = 'block';
    document.getElementById('cs').style.display = 'block';
    document.getElementById('physics').style.display = 'block';
    document.getElementById('algorithms').style.display = 'block';
    document.getElementById('git').style.display = 'block';

    document.getElementById("skillrows").scrollIntoView({behavior: "smooth"});
}
function showDataScience() {
    document.getElementById('numpy').style.display = 'block';
    document.getElementById('pandas').style.display = 'block';
    document.getElementById('matplotlib').style.display = 'block';
    document.getElementById('seaborn').style.display = 'block';
    document.getElementById('plotly').style.display = 'block';
    document.getElementById('scikit-learn').style.display = 'block';
    document.getElementById('jupyter').style.display = 'block';
    document.getElementById('modeling').style.display = 'block';
    document.getElementById('oracle').style.display = 'none';
    document.getElementById('aws').style.display = 'none';
    document.getElementById('sql').style.display = 'none';
    document.getElementById('postgresql').style.display = 'none';
    document.getElementById('mysql').style.display = 'none';
    document.getElementById('sqlite').style.display = 'none';
    document.getElementById('dbeaver').style.display = 'none';
    document.getElementById('excel').style.display = 'none';
    document.getElementById('python').style.display = 'block';
    document.getElementById('django').style.display = 'none';
    document.getElementById('java').style.display = 'none';
    document.getElementById('html').style.display = 'none';
    document.getElementById('css').style.display = 'none';
    document.getElementById('javascript').style.display = 'none';
    document.getElementById('matlab').style.display = 'block';
    document.getElementById('labview').style.display = 'none';
    document.getElementById('imagej').style.display = 'none';
    document.getElementById('latex').style.display = 'none';
    document.getElementById('word').style.display = 'none';
    document.getElementById('powerpoint').style.display = 'none';

    document.getElementById('math').style.display = 'none';
    document.getElementById('stats').style.display = 'block';
    document.getElementById('cs').style.display = 'block';
    document.getElementById('physics').style.display = 'none';
    document.getElementById('algorithms').style.display = 'none';
    document.getElementById('git').style.display = 'none';

    document.getElementById("skillrows").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
function showDataViz() {
    document.getElementById('numpy').style.display = 'none';
    document.getElementById('pandas').style.display = 'none';
    document.getElementById('matplotlib').style.display = 'block';
    document.getElementById('seaborn').style.display = 'block';
    document.getElementById('plotly').style.display = 'block';
    document.getElementById('scikit-learn').style.display = 'block';
    document.getElementById('jupyter').style.display = 'none';
    document.getElementById('modeling').style.display = 'block';
    document.getElementById('oracle').style.display = 'none';
    document.getElementById('aws').style.display = 'none';
    document.getElementById('sql').style.display = 'none';
    document.getElementById('postgresql').style.display = 'none';
    document.getElementById('mysql').style.display = 'none';
    document.getElementById('sqlite').style.display = 'none';
    document.getElementById('dbeaver').style.display = 'none';
    document.getElementById('excel').style.display = 'none';
    document.getElementById('python').style.display = 'block';
    document.getElementById('django').style.display = 'none';
    document.getElementById('java').style.display = 'none';
    document.getElementById('html').style.display = 'none';
    document.getElementById('css').style.display = 'none';
    document.getElementById('javascript').style.display = 'none';
    document.getElementById('matlab').style.display = 'block';
    document.getElementById('labview').style.display = 'none';
    document.getElementById('imagej').style.display = 'none';
    document.getElementById('latex').style.display = 'none';
    document.getElementById('word').style.display = 'none';
    document.getElementById('powerpoint').style.display = 'none';

    document.getElementById('math').style.display = 'none';
    document.getElementById('stats').style.display = 'none';
    document.getElementById('cs').style.display = 'none';
    document.getElementById('physics').style.display = 'none';
    document.getElementById('algorithms').style.display = 'none';
    document.getElementById('git').style.display = 'none';

    document.getElementById("skillrows").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
function showDataBases() {
    document.getElementById('numpy').style.display = 'none';
    document.getElementById('pandas').style.display = 'block';
    document.getElementById('matplotlib').style.display = 'none';
    document.getElementById('seaborn').style.display = 'none';
    document.getElementById('plotly').style.display = 'none';
    document.getElementById('scikit-learn').style.display = 'none';
    document.getElementById('jupyter').style.display = 'none';
    document.getElementById('modeling').style.display = 'none';
    document.getElementById('oracle').style.display = 'block';
    document.getElementById('aws').style.display = 'block';
    document.getElementById('sql').style.display = 'block';
    document.getElementById('postgresql').style.display = 'block';
    document.getElementById('mysql').style.display = 'block';
    document.getElementById('sqlite').style.display = 'block';
    document.getElementById('dbeaver').style.display = 'block';
    document.getElementById('excel').style.display = 'block';
    document.getElementById('python').style.display = 'none';
    document.getElementById('django').style.display = 'none';
    document.getElementById('java').style.display = 'none';
    document.getElementById('html').style.display = 'none';
    document.getElementById('css').style.display = 'none';
    document.getElementById('javascript').style.display = 'none';
    document.getElementById('matlab').style.display = 'none';
    document.getElementById('labview').style.display = 'none';
    document.getElementById('imagej').style.display = 'none';
    document.getElementById('latex').style.display = 'none';
    document.getElementById('word').style.display = 'none';
    document.getElementById('powerpoint').style.display = 'none';

    document.getElementById('math').style.display = 'none';
    document.getElementById('stats').style.display = 'none';
    document.getElementById('cs').style.display = 'block';
    document.getElementById('physics').style.display = 'none';
    document.getElementById('algorithms').style.display = 'none';
    document.getElementById('git').style.display = 'none';

    document.getElementById("skillrows").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
function showPython() {
    document.getElementById('numpy').style.display = 'block';
    document.getElementById('pandas').style.display = 'block';
    document.getElementById('matplotlib').style.display = 'block';
    document.getElementById('seaborn').style.display = 'block';
    document.getElementById('plotly').style.display = 'block';
    document.getElementById('scikit-learn').style.display = 'block';
    document.getElementById('jupyter').style.display = 'block';
    document.getElementById('modeling').style.display = 'none';
    document.getElementById('oracle').style.display = 'none';
    document.getElementById('aws').style.display = 'none';
    document.getElementById('sql').style.display = 'none';
    document.getElementById('postgresql').style.display = 'none';
    document.getElementById('mysql').style.display = 'none';
    document.getElementById('sqlite').style.display = 'none';
    document.getElementById('dbeaver').style.display = 'none';
    document.getElementById('excel').style.display = 'none';
    document.getElementById('python').style.display = 'block';
    document.getElementById('django').style.display = 'block';
    document.getElementById('java').style.display = 'none';
    document.getElementById('html').style.display = 'none';
    document.getElementById('css').style.display = 'none';
    document.getElementById('javascript').style.display = 'none';
    document.getElementById('matlab').style.display = 'none';
    document.getElementById('labview').style.display = 'none';
    document.getElementById('imagej').style.display = 'none';
    document.getElementById('latex').style.display = 'none';
    document.getElementById('word').style.display = 'none';
    document.getElementById('powerpoint').style.display = 'none';

    document.getElementById('math').style.display = 'none';
    document.getElementById('stats').style.display = 'none';
    document.getElementById('cs').style.display = 'block';
    document.getElementById('physics').style.display = 'none';
    document.getElementById('algorithms').style.display = 'none';
    document.getElementById('git').style.display = 'none';

    document.getElementById("skillrows").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
function showLanguages() {
    document.getElementById('numpy').style.display = 'none';
    document.getElementById('pandas').style.display = 'none';
    document.getElementById('matplotlib').style.display = 'none';
    document.getElementById('seaborn').style.display = 'none';
    document.getElementById('plotly').style.display = 'none';
    document.getElementById('scikit-learn').style.display = 'none';
    document.getElementById('jupyter').style.display = 'none';
    document.getElementById('modeling').style.display = 'none';
    document.getElementById('oracle').style.display = 'none';
    document.getElementById('aws').style.display = 'none';
    document.getElementById('sql').style.display = 'block';
    document.getElementById('postgresql').style.display = 'none';
    document.getElementById('mysql').style.display = 'none';
    document.getElementById('sqlite').style.display = 'none';
    document.getElementById('dbeaver').style.display = 'none';
    document.getElementById('excel').style.display = 'none';
    document.getElementById('python').style.display = 'block';
    document.getElementById('django').style.display = 'none';
    document.getElementById('java').style.display = 'block';
    document.getElementById('html').style.display = 'block';
    document.getElementById('css').style.display = 'block';
    document.getElementById('javascript').style.display = 'block';
    document.getElementById('matlab').style.display = 'block';
    document.getElementById('labview').style.display = 'block';
    document.getElementById('imagej').style.display = 'block';
    document.getElementById('latex').style.display = 'block';
    document.getElementById('word').style.display = 'none';
    document.getElementById('powerpoint').style.display = 'none';

    document.getElementById('math').style.display = 'none';
    document.getElementById('stats').style.display = 'none';
    document.getElementById('cs').style.display = 'none';
    document.getElementById('physics').style.display = 'none';
    document.getElementById('algorithms').style.display = 'none';
    document.getElementById('git').style.display = 'none';

    document.getElementById("skillrows").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
function showSoftware() {
    document.getElementById('numpy').style.display = 'none';
    document.getElementById('pandas').style.display = 'none';
    document.getElementById('matplotlib').style.display = 'none';
    document.getElementById('seaborn').style.display = 'none';
    document.getElementById('plotly').style.display = 'none';
    document.getElementById('scikit-learn').style.display = 'none';
    document.getElementById('jupyter').style.display = 'none';
    document.getElementById('modeling').style.display = 'none';
    document.getElementById('oracle').style.display = 'none';
    document.getElementById('aws').style.display = 'none';
    document.getElementById('sql').style.display = 'none';
    document.getElementById('postgresql').style.display = 'none';
    document.getElementById('mysql').style.display = 'none';
    document.getElementById('sqlite').style.display = 'none';
    document.getElementById('dbeaver').style.display = 'none';
    document.getElementById('excel').style.display = 'none';
    document.getElementById('python').style.display = 'none';
    document.getElementById('django').style.display = 'none';
    document.getElementById('java').style.display = 'none';
    document.getElementById('html').style.display = 'none';
    document.getElementById('css').style.display = 'none';
    document.getElementById('javascript').style.display = 'none';
    document.getElementById('matlab').style.display = 'block';
    document.getElementById('labview').style.display = 'block';
    document.getElementById('imagej').style.display = 'block';
    document.getElementById('latex').style.display = 'none';
    document.getElementById('word').style.display = 'block';
    document.getElementById('powerpoint').style.display = 'block';

    document.getElementById('math').style.display = 'none';
    document.getElementById('stats').style.display = 'none';
    document.getElementById('cs').style.display = 'none';
    document.getElementById('physics').style.display = 'none';
    document.getElementById('algorithms').style.display = 'none';
    document.getElementById('git').style.display = 'block';

    document.getElementById("skillrows").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
function showWebdev() {
    document.getElementById('numpy').style.display = 'none';
    document.getElementById('pandas').style.display = 'none';
    document.getElementById('matplotlib').style.display = 'none';
    document.getElementById('seaborn').style.display = 'none';
    document.getElementById('plotly').style.display = 'none';
    document.getElementById('scikit-learn').style.display = 'none';
    document.getElementById('jupyter').style.display = 'none';
    document.getElementById('modeling').style.display = 'none';
    document.getElementById('oracle').style.display = 'none';
    document.getElementById('aws').style.display = 'none';
    document.getElementById('sql').style.display = 'none';
    document.getElementById('postgresql').style.display = 'none';
    document.getElementById('mysql').style.display = 'none';
    document.getElementById('sqlite').style.display = 'none';
    document.getElementById('dbeaver').style.display = 'none';
    document.getElementById('excel').style.display = 'none';
    document.getElementById('python').style.display = 'block';
    document.getElementById('django').style.display = 'block';
    document.getElementById('java').style.display = 'none';
    document.getElementById('html').style.display = 'block';
    document.getElementById('css').style.display = 'block';
    document.getElementById('javascript').style.display = 'block';
    document.getElementById('matlab').style.display = 'none';
    document.getElementById('labview').style.display = 'none';
    document.getElementById('imagej').style.display = 'none';
    document.getElementById('latex').style.display = 'none';
    document.getElementById('word').style.display = 'none';
    document.getElementById('powerpoint').style.display = 'none';

    document.getElementById('math').style.display = 'none';
    document.getElementById('stats').style.display = 'none';
    document.getElementById('cs').style.display = 'none';
    document.getElementById('physics').style.display = 'none';
    document.getElementById('algorithms').style.display = 'none';
    document.getElementById('git').style.display = 'block';

    document.getElementById("skillrows").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
