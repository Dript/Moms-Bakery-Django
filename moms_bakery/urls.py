from django.conf.urls import url
from . import views
 
urlpatterns=[
	url(r'^home/', views.index,name='index'),	
	url(r'^data/$', views.data, name='data'),
	url(r'^get_data/$', views.get_data, name='get_data'),
	url(r'^dash/$',views.dash,name='dashboard'),
	url(r'^bike/$',views.order_bike,name='order_comp'),
	url(r'^par/$',   views.par,name='order_dell1'),
	url(r'^san/$',   views.san,name='order_dell1'),
	url(r'^bur/$',   views.bur,name='order_dell1'),
	url(r'^pat/$',   views.pat,name='order_dell1'),
	url(r'^ice/$',   views.ice,name='order_dell1'),
	url(r'^edit_data/$',views.edit_data,name='edit_data')
]
