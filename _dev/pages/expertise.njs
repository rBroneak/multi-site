{% extends "layout.njs" %}
{% block nav %}
	{% import "macros/cp-global-header.njs" as nav %}
	{{nav.active('expertise')}}
{% endblock %}
{% block content %}

	<section class="container">
			{% for item in expertiseLeadin %}
				<h1>{{item.title}}</h1>
				<h2>{{item.intro}}</h2>
				<hr>
			{% endfor %}
			<section class="align-left-top primary-content">
				<ul>
					{% for item in expertiseList1 %}
						<li>{{  item }}</li>
					{% endfor %}
				</ul>
				<ul>
					{% for item in expertiseList2 %}
						<li>{{  item }}</li>
					{% endfor %}
				</ul>
			</section>
	</section>

{% endblock %}
