angular
  .module('searchBarSubMenu', [])
  .component('searchBarSubMenu', {
    controller: function(searchBarSubMenuItems, $filter) {
      const ctrl = this;

      ctrl.$onInit = () => {
        ctrl.items = searchBarSubMenuItems;
      };
      ctrl.goToUrl = (url) => { window.open(url, '_blank'); };
      ctrl.translate = (original) => {
          return original.replace(/\{(.+)\}/g, (match, p1) => $filter('translate')(p1));
      };
    },
    template: `<div class="layout-align-end-center layout-row flex search-bar-sub-menu">
                <ul>
                  <li ng-repeat="item in $ctrl.items">
                  <button data-href="{{ $ctrl.translate(item.action) }}" aria-label="{{ $ctrl.translate(item.description) }}" ng-click="goToUrl($ctrl.translate(item.action))" class="button-with-icon zero-margin md-button md-small {{item.cssClasses}}" type="button">
                    <md-tooltip md-direction="bottom" md-delay="500">{{ $ctrl.translate(item.description) }}</md-tooltip><prm-icon style="z-index:1" icon-type="svg" svg-icon-set="{{item.icon.set}}" icon-definition="{{item.icon.icon}}"></prm-icon>
                    <span class="search-bar-sub-menu-item" ng-class="(item.show_xs) ? '' : 'hide-xs'">{{ $ctrl.translate(item.name) }}</span>
                  </button>
                  </li>
                </ul>
              </div>`

  });
