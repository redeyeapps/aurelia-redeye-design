System.register(["./get-value"], function (exports_1, context_1) {
    "use strict";
    var get_value_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (get_value_1_1) {
                get_value_1 = get_value_1_1;
            }
        ],
        execute: function () {
            describe('GetValueValueConverter', function () {
                var VC;
                var object = {
                    name: 'hello',
                    address: {
                        street: 'Warren St',
                        suburb: 'Indooroopilly'
                    }
                };
                beforeAll(function () {
                    VC = new get_value_1.GetValueValueConverter();
                });
                it('should get the correct value on a single level', function () {
                    var res = VC.toView(object, 'name');
                    expect(res).toEqual(object.name);
                });
                it('should get the correct value on multiple levels', function () {
                    var res = VC.toView(object, 'address.street');
                    expect(res).toEqual(object.address.street);
                    var res2 = VC.toView(object, 'address.suburb');
                    expect(res2).toEqual(object.address.suburb);
                });
                it('should return empty string when it doesn\'t exist', function () {
                    var res = VC.toView(object, 'phone');
                    expect(res).toEqual('');
                });
                it('should return empty string when it doesn\'t exist on multiple', function () {
                    var res = VC.toView(object, 'address.city');
                    expect(res).toEqual('');
                });
            });
        }
    };
});
