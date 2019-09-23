from rest_framework import routers
from .api import CatViewSet
from .api import CustomViewSet

router = routers.DefaultRouter()
router.register('api/cats', CatViewSet, 'cats')
router.register('api/all_cats', CustomViewSet, 'cats')

urlpatterns = router.urls