{% extends "layout.njs" %}
{% block nav %}
	{% import "macros/cp-global-header.njs" as nav %}
	{{nav.active('bio')}}
{% endblock %}
{% block content %}

	<section class="container">
		{% for item in bioLeadin %}
			<h1>{{item.title}}</h1>
			<h2>{{item.intro}}</h2>
			<hr>
		{% endfor %}
		<section class="primary-content">
		{{ bioContent | safe}}
		</section>
	</section>


{% endblock %}
