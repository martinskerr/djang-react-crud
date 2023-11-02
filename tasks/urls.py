from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views
#apiVersion

router = routers.DefaultRouter()
router.register(r'task', views.TaskView, 'tasks')


urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title = "Tasks API"))
]