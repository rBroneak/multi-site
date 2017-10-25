<!-- layout.nunjucks -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
	<title>rBroneak | creative</title>
	<link rel="stylesheet" href="assets/styles/style.css">
	<link href="https://fonts.googleapis.com/css?family=Poppins:400,600" rel="stylesheet" type="text/css">
	<link rel="icon" href="/favicon.ico" type="image/x-icon" />
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<div class="site">
	<div id="backgroundImage" style="background-image: url(https://www.glerl.noaa.gov/metdata/mkg/mkg01.jpg)"></div>
	<div class="site-content">
	{% block nav %}
	{% endblock %}
		{% block content %}
		{% endblock %}
	{% block footer %}

	{% endblock %}


	</div>
	{% include "partials/global-footer.njs" %}
</div>

	<script src="assets/js/jQuery-1.12.min.js"></script>
	<script src="assets/js/plugins/plugins.js"></script>
	<script src="assets/js/rb-public-main.js"></script>

</body>
</html>
