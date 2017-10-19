{% extends "layout.njs" %}
{% block nav %}
	{% import "macros/cp-global-header.njs" as nav %}
	{{nav.active('clients')}}
{% endblock %}
{% block content %}
	<section class="container">
		{% for item in clientLeadin %}
			<h1>{{item.title}}</h1>
			<h2>{{item.intro}}</h2>
			<hr>
		{% endfor %}
		<section class="primary-content">
			<ul>
			{% for item in clientList %}
				<li>{{  item }}</li>
			{% endfor %}
			</ul>
		</section>
	</section>
{% endblock %}
