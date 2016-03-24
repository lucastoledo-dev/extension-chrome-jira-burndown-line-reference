System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  depCache: {
    "app/main.js": [
      "npm:jquery@2.2.0.js",
      "app/components/burndown.js",
      "app/utils/detourer.js"
    ],
    "npm:core-js@1.2.6.js": [
      "npm:core-js@1.2.6/index.js"
    ],
    "npm:jquery@2.2.0.js": [
      "npm:jquery@2.2.0/dist/jquery.js"
    ],
    "app/components/line.js": [
      "app/components/line/line.js"
    ],
    "npm:core-js@1.2.6/index.js": [
      "npm:core-js@1.2.6/shim.js",
      "npm:core-js@1.2.6/modules/core.dict.js",
      "npm:core-js@1.2.6/modules/core.get-iterator-method.js",
      "npm:core-js@1.2.6/modules/core.get-iterator.js",
      "npm:core-js@1.2.6/modules/core.is-iterable.js",
      "npm:core-js@1.2.6/modules/core.delay.js",
      "npm:core-js@1.2.6/modules/core.function.part.js",
      "npm:core-js@1.2.6/modules/core.object.is-object.js",
      "npm:core-js@1.2.6/modules/core.object.classof.js",
      "npm:core-js@1.2.6/modules/core.object.define.js",
      "npm:core-js@1.2.6/modules/core.object.make.js",
      "npm:core-js@1.2.6/modules/core.number.iterator.js",
      "npm:core-js@1.2.6/modules/core.string.escape-html.js",
      "npm:core-js@1.2.6/modules/core.string.unescape-html.js",
      "npm:core-js@1.2.6/modules/core.log.js",
      "npm:core-js@1.2.6/modules/$.core.js"
    ],
    "app/components/line/line.js": [
      "npm:babel-runtime@5.8.35/helpers/create-class.js",
      "npm:babel-runtime@5.8.35/helpers/class-call-check.js",
      "npm:babel-runtime@5.8.35/core-js/object/values.js",
      "app/components/line/line.less!github:rafaelfbs/systemjs-less-plugin@1.4.2.js",
      "npm:jquery@2.2.0.js",
      "app/utils/property.js"
    ],
    "npm:core-js@1.2.6/modules/core.is-iterable.js": [
      "npm:core-js@1.2.6/modules/$.classof.js",
      "npm:core-js@1.2.6/modules/$.wks.js",
      "npm:core-js@1.2.6/modules/$.iterators.js",
      "npm:core-js@1.2.6/modules/$.core.js"
    ],
    "npm:core-js@1.2.6/shim.js": [
      "npm:core-js@1.2.6/modules/es5.js",
      "npm:core-js@1.2.6/modules/es6.symbol.js",
      "npm:core-js@1.2.6/modules/es6.object.assign.js",
      "npm:core-js@1.2.6/modules/es6.object.is.js",
      "npm:core-js@1.2.6/modules/es6.object.set-prototype-of.js",
      "npm:core-js@1.2.6/modules/es6.object.to-string.js",
      "npm:core-js@1.2.6/modules/es6.object.freeze.js",
      "npm:core-js@1.2.6/modules/es6.object.seal.js",
      "npm:core-js@1.2.6/modules/es6.object.prevent-extensions.js",
      "npm:core-js@1.2.6/modules/es6.object.is-frozen.js",
      "npm:core-js@1.2.6/modules/es6.object.is-sealed.js",
      "npm:core-js@1.2.6/modules/es6.object.is-extensible.js",
      "npm:core-js@1.2.6/modules/es6.object.get-own-property-descriptor.js",
      "npm:core-js@1.2.6/modules/es6.object.get-prototype-of.js",
      "npm:core-js@1.2.6/modules/es6.object.keys.js",
      "npm:core-js@1.2.6/modules/es6.object.get-own-property-names.js",
      "npm:core-js@1.2.6/modules/es6.function.name.js",
      "npm:core-js@1.2.6/modules/es6.function.has-instance.js",
      "npm:core-js@1.2.6/modules/es6.number.constructor.js",
      "npm:core-js@1.2.6/modules/es6.number.epsilon.js",
      "npm:core-js@1.2.6/modules/es6.number.is-finite.js",
      "npm:core-js@1.2.6/modules/es6.number.is-integer.js",
      "npm:core-js@1.2.6/modules/es6.number.is-nan.js",
      "npm:core-js@1.2.6/modules/es6.number.is-safe-integer.js",
      "npm:core-js@1.2.6/modules/es6.number.max-safe-integer.js",
      "npm:core-js@1.2.6/modules/es6.number.min-safe-integer.js",
      "npm:core-js@1.2.6/modules/es6.number.parse-float.js",
      "npm:core-js@1.2.6/modules/es6.number.parse-int.js",
      "npm:core-js@1.2.6/modules/es6.math.acosh.js",
      "npm:core-js@1.2.6/modules/es6.math.asinh.js",
      "npm:core-js@1.2.6/modules/es6.math.atanh.js",
      "npm:core-js@1.2.6/modules/es6.math.cbrt.js",
      "npm:core-js@1.2.6/modules/es6.math.clz32.js",
      "npm:core-js@1.2.6/modules/es6.math.cosh.js",
      "npm:core-js@1.2.6/modules/es6.math.expm1.js",
      "npm:core-js@1.2.6/modules/es6.math.fround.js",
      "npm:core-js@1.2.6/modules/es6.math.hypot.js",
      "npm:core-js@1.2.6/modules/es6.math.imul.js",
      "npm:core-js@1.2.6/modules/es6.math.log10.js",
      "npm:core-js@1.2.6/modules/es6.math.log1p.js",
      "npm:core-js@1.2.6/modules/es6.math.log2.js",
      "npm:core-js@1.2.6/modules/es6.math.sign.js",
      "npm:core-js@1.2.6/modules/es6.math.sinh.js",
      "npm:core-js@1.2.6/modules/es6.math.tanh.js",
      "npm:core-js@1.2.6/modules/es6.math.trunc.js",
      "npm:core-js@1.2.6/modules/es6.string.from-code-point.js",
      "npm:core-js@1.2.6/modules/es6.string.raw.js",
      "npm:core-js@1.2.6/modules/es6.string.trim.js",
      "npm:core-js@1.2.6/modules/es6.string.iterator.js",
      "npm:core-js@1.2.6/modules/es6.string.code-point-at.js",
      "npm:core-js@1.2.6/modules/es6.string.ends-with.js",
      "npm:core-js@1.2.6/modules/es6.string.includes.js",
      "npm:core-js@1.2.6/modules/es6.string.repeat.js",
      "npm:core-js@1.2.6/modules/es6.string.starts-with.js",
      "npm:core-js@1.2.6/modules/es6.array.from.js",
      "npm:core-js@1.2.6/modules/es6.array.of.js",
      "npm:core-js@1.2.6/modules/es6.array.iterator.js",
      "npm:core-js@1.2.6/modules/es6.array.species.js",
      "npm:core-js@1.2.6/modules/es6.array.copy-within.js",
      "npm:core-js@1.2.6/modules/es6.array.fill.js",
      "npm:core-js@1.2.6/modules/es6.array.find.js",
      "npm:core-js@1.2.6/modules/es6.array.find-index.js",
      "npm:core-js@1.2.6/modules/es6.regexp.constructor.js",
      "npm:core-js@1.2.6/modules/es6.regexp.flags.js",
      "npm:core-js@1.2.6/modules/es6.regexp.match.js",
      "npm:core-js@1.2.6/modules/es6.regexp.replace.js",
      "npm:core-js@1.2.6/modules/es6.regexp.search.js",
      "npm:core-js@1.2.6/modules/es6.regexp.split.js",
      "npm:core-js@1.2.6/modules/es6.promise.js",
      "npm:core-js@1.2.6/modules/es6.map.js",
      "npm:core-js@1.2.6/modules/es6.set.js",
      "npm:core-js@1.2.6/modules/es6.weak-map.js",
      "npm:core-js@1.2.6/modules/es6.weak-set.js",
      "npm:core-js@1.2.6/modules/es6.reflect.apply.js",
      "npm:core-js@1.2.6/modules/es6.reflect.construct.js",
      "npm:core-js@1.2.6/modules/es6.reflect.define-property.js",
      "npm:core-js@1.2.6/modules/es6.reflect.delete-property.js",
      "npm:core-js@1.2.6/modules/es6.reflect.enumerate.js",
      "npm:core-js@1.2.6/modules/es6.reflect.get.js",
      "npm:core-js@1.2.6/modules/es6.reflect.get-own-property-descriptor.js",
      "npm:core-js@1.2.6/modules/es6.reflect.get-prototype-of.js",
      "npm:core-js@1.2.6/modules/es6.reflect.has.js",
      "npm:core-js@1.2.6/modules/es6.reflect.is-extensible.js",
      "npm:core-js@1.2.6/modules/es6.reflect.own-keys.js",
      "npm:core-js@1.2.6/modules/es6.reflect.prevent-extensions.js",
      "npm:core-js@1.2.6/modules/es6.reflect.set.js",
      "npm:core-js@1.2.6/modules/es6.reflect.set-prototype-of.js",
      "npm:core-js@1.2.6/modules/es7.array.includes.js",
      "npm:core-js@1.2.6/modules/es7.string.at.js",
      "npm:core-js@1.2.6/modules/es7.string.pad-left.js",
      "npm:core-js@1.2.6/modules/es7.string.pad-right.js",
      "npm:core-js@1.2.6/modules/es7.string.trim-left.js",
      "npm:core-js@1.2.6/modules/es7.string.trim-right.js",
      "npm:core-js@1.2.6/modules/es7.regexp.escape.js",
      "npm:core-js@1.2.6/modules/es7.object.get-own-property-descriptors.js",
      "npm:core-js@1.2.6/modules/es7.object.values.js",
      "npm:core-js@1.2.6/modules/es7.object.entries.js",
      "npm:core-js@1.2.6/modules/es7.map.to-json.js",
      "npm:core-js@1.2.6/modules/es7.set.to-json.js",
      "npm:core-js@1.2.6/modules/js.array.statics.js",
      "npm:core-js@1.2.6/modules/web.timers.js",
      "npm:core-js@1.2.6/modules/web.immediate.js",
      "npm:core-js@1.2.6/modules/web.dom.iterable.js",
      "npm:core-js@1.2.6/modules/$.core.js"
    ],
    "npm:core-js@1.2.6/modules/core.get-iterator-method.js": [
      "npm:core-js@1.2.6/modules/$.classof.js",
      "npm:core-js@1.2.6/modules/$.wks.js",
      "npm:core-js@1.2.6/modules/$.iterators.js",
      "npm:core-js@1.2.6/modules/$.core.js"
    ],
    "npm:core-js@1.2.6/modules/core.delay.js": [
      "npm:core-js@1.2.6/modules/$.global.js",
      "npm:core-js@1.2.6/modules/$.core.js",
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.partial.js"
    ],
    "npm:core-js@1.2.6/modules/core.get-iterator.js": [
      "npm:core-js@1.2.6/modules/$.an-object.js",
      "npm:core-js@1.2.6/modules/core.get-iterator-method.js",
      "npm:core-js@1.2.6/modules/$.core.js"
    ],
    "npm:core-js@1.2.6/modules/core.object.define.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.object-define.js"
    ],
    "npm:core-js@1.2.6/modules/core.dict.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.ctx.js",
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.property-desc.js",
      "npm:core-js@1.2.6/modules/$.object-assign.js",
      "npm:core-js@1.2.6/modules/$.keyof.js",
      "npm:core-js@1.2.6/modules/$.a-function.js",
      "npm:core-js@1.2.6/modules/$.for-of.js",
      "npm:core-js@1.2.6/modules/core.is-iterable.js",
      "npm:core-js@1.2.6/modules/$.iter-create.js",
      "npm:core-js@1.2.6/modules/$.iter-step.js",
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.to-iobject.js",
      "npm:core-js@1.2.6/modules/$.descriptors.js",
      "npm:core-js@1.2.6/modules/$.has.js"
    ],
    "npm:core-js@1.2.6/modules/core.object.is-object.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.is-object.js"
    ],
    "npm:core-js@1.2.6/modules/core.object.classof.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.classof.js"
    ],
    "npm:core-js@1.2.6/modules/core.function.part.js": [
      "npm:core-js@1.2.6/modules/$.path.js",
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.core.js",
      "npm:core-js@1.2.6/modules/$.partial.js"
    ],
    "npm:core-js@1.2.6/modules/core.object.make.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.object-define.js",
      "npm:core-js@1.2.6/modules/$.js"
    ],
    "npm:core-js@1.2.6/modules/core.number.iterator.js": [
      "npm:core-js@1.2.6/modules/$.iter-define.js"
    ],
    "npm:core-js@1.2.6/modules/core.string.escape-html.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.replacer.js"
    ],
    "npm:core-js@1.2.6/modules/core.string.unescape-html.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.replacer.js"
    ],
    "npm:core-js@1.2.6/modules/core.log.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.global.js",
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.object-assign.js"
    ],
    "npm:babel-runtime@5.8.35/helpers/create-class.js": [
      "npm:babel-runtime@5.8.35/core-js/object/define-property.js"
    ],
    "app/utils/property.js": [
      "npm:babel-runtime@5.8.35/core-js/object/define-property.js"
    ],
    "npm:babel-runtime@5.8.35/core-js/object/values.js": [
      "npm:core-js@1.2.6/library/fn/object/values.js"
    ],
    "npm:core-js@1.2.6/modules/es6.symbol.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.global.js",
      "npm:core-js@1.2.6/modules/$.has.js",
      "npm:core-js@1.2.6/modules/$.descriptors.js",
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.redefine.js",
      "npm:core-js@1.2.6/modules/$.fails.js",
      "npm:core-js@1.2.6/modules/$.shared.js",
      "npm:core-js@1.2.6/modules/$.set-to-string-tag.js",
      "npm:core-js@1.2.6/modules/$.uid.js",
      "npm:core-js@1.2.6/modules/$.wks.js",
      "npm:core-js@1.2.6/modules/$.keyof.js",
      "npm:core-js@1.2.6/modules/$.get-names.js",
      "npm:core-js@1.2.6/modules/$.enum-keys.js",
      "npm:core-js@1.2.6/modules/$.is-array.js",
      "npm:core-js@1.2.6/modules/$.an-object.js",
      "npm:core-js@1.2.6/modules/$.to-iobject.js",
      "npm:core-js@1.2.6/modules/$.property-desc.js",
      "npm:core-js@1.2.6/modules/$.library.js"
    ],
    "npm:core-js@1.2.6/modules/es5.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.descriptors.js",
      "npm:core-js@1.2.6/modules/$.property-desc.js",
      "npm:core-js@1.2.6/modules/$.html.js",
      "npm:core-js@1.2.6/modules/$.dom-create.js",
      "npm:core-js@1.2.6/modules/$.has.js",
      "npm:core-js@1.2.6/modules/$.cof.js",
      "npm:core-js@1.2.6/modules/$.invoke.js",
      "npm:core-js@1.2.6/modules/$.fails.js",
      "npm:core-js@1.2.6/modules/$.an-object.js",
      "npm:core-js@1.2.6/modules/$.a-function.js",
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.to-object.js",
      "npm:core-js@1.2.6/modules/$.to-iobject.js",
      "npm:core-js@1.2.6/modules/$.to-integer.js",
      "npm:core-js@1.2.6/modules/$.to-index.js",
      "npm:core-js@1.2.6/modules/$.to-length.js",
      "npm:core-js@1.2.6/modules/$.iobject.js",
      "npm:core-js@1.2.6/modules/$.uid.js",
      "npm:core-js@1.2.6/modules/$.array-methods.js",
      "npm:core-js@1.2.6/modules/$.array-includes.js",
      "npm:core-js@1.2.6/modules/$.is-array.js"
    ],
    "npm:core-js@1.2.6/modules/$.classof.js": [
      "npm:core-js@1.2.6/modules/$.cof.js",
      "npm:core-js@1.2.6/modules/$.wks.js"
    ],
    "npm:core-js@1.2.6/modules/$.wks.js": [
      "npm:core-js@1.2.6/modules/$.shared.js",
      "npm:core-js@1.2.6/modules/$.uid.js",
      "npm:core-js@1.2.6/modules/$.global.js"
    ],
    "npm:core-js@1.2.6/modules/es6.object.is.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.same-value.js"
    ],
    "npm:core-js@1.2.6/modules/es6.object.set-prototype-of.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.set-proto.js"
    ],
    "npm:core-js@1.2.6/modules/es6.object.assign.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.object-assign.js"
    ],
    "npm:core-js@1.2.6/modules/es6.object.freeze.js": [
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.object-sap.js"
    ],
    "npm:core-js@1.2.6/modules/es6.object.seal.js": [
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.object-sap.js"
    ],
    "npm:core-js@1.2.6/modules/es6.object.to-string.js": [
      "npm:core-js@1.2.6/modules/$.classof.js",
      "npm:core-js@1.2.6/modules/$.wks.js",
      "npm:core-js@1.2.6/modules/$.redefine.js"
    ],
    "npm:core-js@1.2.6/modules/es6.object.prevent-extensions.js": [
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.object-sap.js"
    ],
    "npm:core-js@1.2.6/modules/es6.object.get-prototype-of.js": [
      "npm:core-js@1.2.6/modules/$.to-object.js",
      "npm:core-js@1.2.6/modules/$.object-sap.js"
    ],
    "npm:core-js@1.2.6/modules/es6.object.is-frozen.js": [
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.object-sap.js"
    ],
    "npm:core-js@1.2.6/modules/es6.object.is-sealed.js": [
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.object-sap.js"
    ],
    "npm:core-js@1.2.6/modules/es6.object.keys.js": [
      "npm:core-js@1.2.6/modules/$.to-object.js",
      "npm:core-js@1.2.6/modules/$.object-sap.js"
    ],
    "npm:core-js@1.2.6/modules/es6.object.is-extensible.js": [
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.object-sap.js"
    ],
    "npm:core-js@1.2.6/modules/es6.object.get-own-property-descriptor.js": [
      "npm:core-js@1.2.6/modules/$.to-iobject.js",
      "npm:core-js@1.2.6/modules/$.object-sap.js"
    ],
    "npm:core-js@1.2.6/modules/es6.function.name.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.property-desc.js",
      "npm:core-js@1.2.6/modules/$.has.js",
      "npm:core-js@1.2.6/modules/$.descriptors.js"
    ],
    "npm:core-js@1.2.6/modules/es6.object.get-own-property-names.js": [
      "npm:core-js@1.2.6/modules/$.object-sap.js",
      "npm:core-js@1.2.6/modules/$.get-names.js"
    ],
    "npm:core-js@1.2.6/modules/es6.number.epsilon.js": [
      "npm:core-js@1.2.6/modules/$.export.js"
    ],
    "npm:core-js@1.2.6/modules/es6.function.has-instance.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.wks.js"
    ],
    "npm:core-js@1.2.6/modules/es6.number.is-finite.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.global.js"
    ],
    "npm:core-js@1.2.6/modules/es6.number.constructor.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.global.js",
      "npm:core-js@1.2.6/modules/$.has.js",
      "npm:core-js@1.2.6/modules/$.cof.js",
      "npm:core-js@1.2.6/modules/$.to-primitive.js",
      "npm:core-js@1.2.6/modules/$.fails.js",
      "npm:core-js@1.2.6/modules/$.string-trim.js",
      "npm:core-js@1.2.6/modules/$.descriptors.js",
      "npm:core-js@1.2.6/modules/$.redefine.js"
    ],
    "npm:core-js@1.2.6/modules/es6.number.is-nan.js": [
      "npm:core-js@1.2.6/modules/$.export.js"
    ],
    "npm:core-js@1.2.6/modules/es6.number.is-safe-integer.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.is-integer.js"
    ],
    "npm:core-js@1.2.6/modules/es6.number.is-integer.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.is-integer.js"
    ],
    "npm:core-js@1.2.6/modules/es6.number.max-safe-integer.js": [
      "npm:core-js@1.2.6/modules/$.export.js"
    ],
    "npm:core-js@1.2.6/modules/es6.number.min-safe-integer.js": [
      "npm:core-js@1.2.6/modules/$.export.js"
    ],
    "npm:core-js@1.2.6/modules/es6.number.parse-int.js": [
      "npm:core-js@1.2.6/modules/$.export.js"
    ],
    "npm:core-js@1.2.6/modules/es6.math.acosh.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.math-log1p.js"
    ],
    "npm:core-js@1.2.6/modules/es6.number.parse-float.js": [
      "npm:core-js@1.2.6/modules/$.export.js"
    ],
    "npm:core-js@1.2.6/modules/es6.math.cbrt.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.math-sign.js"
    ],
    "npm:core-js@1.2.6/modules/es6.math.asinh.js": [
      "npm:core-js@1.2.6/modules/$.export.js"
    ],
    "npm:core-js@1.2.6/modules/es6.math.atanh.js": [
      "npm:core-js@1.2.6/modules/$.export.js"
    ],
    "npm:core-js@1.2.6/modules/es6.math.clz32.js": [
      "npm:core-js@1.2.6/modules/$.export.js"
    ],
    "npm:core-js@1.2.6/modules/es6.math.cosh.js": [
      "npm:core-js@1.2.6/modules/$.export.js"
    ],
    "npm:core-js@1.2.6/modules/es6.math.expm1.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.math-expm1.js"
    ],
    "npm:core-js@1.2.6/modules/es6.math.fround.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.math-sign.js"
    ],
    "npm:core-js@1.2.6/modules/es6.math.imul.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.fails.js"
    ],
    "npm:core-js@1.2.6/modules/es6.math.hypot.js": [
      "npm:core-js@1.2.6/modules/$.export.js"
    ],
    "npm:core-js@1.2.6/modules/es6.math.sign.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.math-sign.js"
    ],
    "npm:core-js@1.2.6/modules/es6.math.log1p.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.math-log1p.js"
    ],
    "npm:core-js@1.2.6/modules/es6.math.log10.js": [
      "npm:core-js@1.2.6/modules/$.export.js"
    ],
    "npm:core-js@1.2.6/modules/es6.math.log2.js": [
      "npm:core-js@1.2.6/modules/$.export.js"
    ],
    "npm:core-js@1.2.6/modules/es6.math.sinh.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.math-expm1.js",
      "npm:core-js@1.2.6/modules/$.fails.js"
    ],
    "npm:core-js@1.2.6/modules/es6.math.trunc.js": [
      "npm:core-js@1.2.6/modules/$.export.js"
    ],
    "npm:core-js@1.2.6/modules/es6.math.tanh.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.math-expm1.js"
    ],
    "npm:core-js@1.2.6/modules/es6.string.raw.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.to-iobject.js",
      "npm:core-js@1.2.6/modules/$.to-length.js"
    ],
    "npm:core-js@1.2.6/modules/es6.string.from-code-point.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.to-index.js"
    ],
    "npm:core-js@1.2.6/modules/es6.string.includes.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.string-context.js",
      "npm:core-js@1.2.6/modules/$.fails-is-regexp.js"
    ],
    "npm:core-js@1.2.6/modules/es6.string.iterator.js": [
      "npm:core-js@1.2.6/modules/$.string-at.js",
      "npm:core-js@1.2.6/modules/$.iter-define.js"
    ],
    "npm:core-js@1.2.6/modules/es6.string.trim.js": [
      "npm:core-js@1.2.6/modules/$.string-trim.js"
    ],
    "npm:core-js@1.2.6/modules/es6.string.code-point-at.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.string-at.js"
    ],
    "npm:core-js@1.2.6/modules/es6.string.ends-with.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.to-length.js",
      "npm:core-js@1.2.6/modules/$.string-context.js",
      "npm:core-js@1.2.6/modules/$.fails-is-regexp.js"
    ],
    "npm:core-js@1.2.6/modules/es6.string.starts-with.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.to-length.js",
      "npm:core-js@1.2.6/modules/$.string-context.js",
      "npm:core-js@1.2.6/modules/$.fails-is-regexp.js"
    ],
    "npm:core-js@1.2.6/modules/es6.string.repeat.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.string-repeat.js"
    ],
    "npm:core-js@1.2.6/modules/es6.array.from.js": [
      "npm:core-js@1.2.6/modules/$.ctx.js",
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.to-object.js",
      "npm:core-js@1.2.6/modules/$.iter-call.js",
      "npm:core-js@1.2.6/modules/$.is-array-iter.js",
      "npm:core-js@1.2.6/modules/$.to-length.js",
      "npm:core-js@1.2.6/modules/core.get-iterator-method.js",
      "npm:core-js@1.2.6/modules/$.iter-detect.js"
    ],
    "npm:core-js@1.2.6/modules/es6.array.of.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.fails.js"
    ],
    "npm:core-js@1.2.6/modules/es6.array.iterator.js": [
      "npm:core-js@1.2.6/modules/$.add-to-unscopables.js",
      "npm:core-js@1.2.6/modules/$.iter-step.js",
      "npm:core-js@1.2.6/modules/$.iterators.js",
      "npm:core-js@1.2.6/modules/$.to-iobject.js",
      "npm:core-js@1.2.6/modules/$.iter-define.js"
    ],
    "npm:core-js@1.2.6/modules/es6.array.species.js": [
      "npm:core-js@1.2.6/modules/$.set-species.js"
    ],
    "npm:core-js@1.2.6/modules/es6.array.fill.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.array-fill.js",
      "npm:core-js@1.2.6/modules/$.add-to-unscopables.js"
    ],
    "npm:core-js@1.2.6/modules/es6.array.copy-within.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.array-copy-within.js",
      "npm:core-js@1.2.6/modules/$.add-to-unscopables.js"
    ],
    "npm:core-js@1.2.6/modules/es6.regexp.constructor.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.global.js",
      "npm:core-js@1.2.6/modules/$.is-regexp.js",
      "npm:core-js@1.2.6/modules/$.flags.js",
      "npm:core-js@1.2.6/modules/$.descriptors.js",
      "npm:core-js@1.2.6/modules/$.fails.js",
      "npm:core-js@1.2.6/modules/$.wks.js",
      "npm:core-js@1.2.6/modules/$.redefine.js",
      "npm:core-js@1.2.6/modules/$.set-species.js"
    ],
    "npm:core-js@1.2.6/modules/es6.array.find-index.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.array-methods.js",
      "npm:core-js@1.2.6/modules/$.add-to-unscopables.js"
    ],
    "npm:core-js@1.2.6/modules/es6.array.find.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.array-methods.js",
      "npm:core-js@1.2.6/modules/$.add-to-unscopables.js"
    ],
    "npm:core-js@1.2.6/modules/es6.regexp.flags.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.descriptors.js",
      "npm:core-js@1.2.6/modules/$.flags.js"
    ],
    "npm:core-js@1.2.6/modules/es6.regexp.replace.js": [
      "npm:core-js@1.2.6/modules/$.fix-re-wks.js"
    ],
    "npm:core-js@1.2.6/modules/es6.regexp.search.js": [
      "npm:core-js@1.2.6/modules/$.fix-re-wks.js"
    ],
    "npm:core-js@1.2.6/modules/es6.regexp.match.js": [
      "npm:core-js@1.2.6/modules/$.fix-re-wks.js"
    ],
    "npm:core-js@1.2.6/modules/es6.regexp.split.js": [
      "npm:core-js@1.2.6/modules/$.fix-re-wks.js"
    ],
    "npm:core-js@1.2.6/modules/es6.weak-map.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.redefine.js",
      "npm:core-js@1.2.6/modules/$.collection-weak.js",
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.has.js",
      "npm:core-js@1.2.6/modules/$.collection.js"
    ],
    "npm:core-js@1.2.6/modules/es6.map.js": [
      "npm:core-js@1.2.6/modules/$.collection-strong.js",
      "npm:core-js@1.2.6/modules/$.collection.js"
    ],
    "npm:core-js@1.2.6/modules/es6.set.js": [
      "npm:core-js@1.2.6/modules/$.collection-strong.js",
      "npm:core-js@1.2.6/modules/$.collection.js"
    ],
    "npm:core-js@1.2.6/modules/es6.reflect.apply.js": [
      "npm:core-js@1.2.6/modules/$.export.js"
    ],
    "npm:core-js@1.2.6/modules/es6.reflect.construct.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.a-function.js",
      "npm:core-js@1.2.6/modules/$.an-object.js",
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.core.js",
      "npm:core-js@1.2.6/modules/$.fails.js"
    ],
    "npm:core-js@1.2.6/modules/es6.reflect.define-property.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.an-object.js",
      "npm:core-js@1.2.6/modules/$.fails.js"
    ],
    "npm:core-js@1.2.6/modules/es6.weak-set.js": [
      "npm:core-js@1.2.6/modules/$.collection-weak.js",
      "npm:core-js@1.2.6/modules/$.collection.js"
    ],
    "npm:core-js@1.2.6/modules/es6.reflect.delete-property.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.an-object.js"
    ],
    "npm:core-js@1.2.6/modules/es6.reflect.enumerate.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.an-object.js",
      "npm:core-js@1.2.6/modules/$.iter-create.js"
    ],
    "npm:core-js@1.2.6/modules/es6.reflect.get-own-property-descriptor.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.an-object.js"
    ],
    "npm:core-js@1.2.6/modules/es6.reflect.get.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.has.js",
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.an-object.js"
    ],
    "npm:core-js@1.2.6/modules/es6.reflect.get-prototype-of.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.an-object.js"
    ],
    "npm:core-js@1.2.6/modules/es6.reflect.has.js": [
      "npm:core-js@1.2.6/modules/$.export.js"
    ],
    "npm:core-js@1.2.6/modules/es6.reflect.prevent-extensions.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.an-object.js"
    ],
    "npm:core-js@1.2.6/modules/es6.reflect.set.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.has.js",
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.property-desc.js",
      "npm:core-js@1.2.6/modules/$.an-object.js",
      "npm:core-js@1.2.6/modules/$.is-object.js"
    ],
    "npm:core-js@1.2.6/modules/es6.reflect.own-keys.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.own-keys.js"
    ],
    "npm:core-js@1.2.6/modules/es6.reflect.is-extensible.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.an-object.js"
    ],
    "npm:core-js@1.2.6/modules/es6.reflect.set-prototype-of.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.set-proto.js"
    ],
    "npm:core-js@1.2.6/modules/es7.array.includes.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.array-includes.js",
      "npm:core-js@1.2.6/modules/$.add-to-unscopables.js"
    ],
    "npm:core-js@1.2.6/modules/es7.string.pad-left.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.string-pad.js"
    ],
    "npm:core-js@1.2.6/modules/es7.string.at.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.string-at.js"
    ],
    "npm:core-js@1.2.6/modules/es7.string.pad-right.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.string-pad.js"
    ],
    "npm:core-js@1.2.6/modules/es7.string.trim-left.js": [
      "npm:core-js@1.2.6/modules/$.string-trim.js"
    ],
    "npm:core-js@1.2.6/modules/es7.object.values.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.object-to-array.js"
    ],
    "npm:core-js@1.2.6/modules/es7.object.entries.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.object-to-array.js"
    ],
    "npm:core-js@1.2.6/modules/es7.string.trim-right.js": [
      "npm:core-js@1.2.6/modules/$.string-trim.js"
    ],
    "npm:core-js@1.2.6/modules/es7.regexp.escape.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.replacer.js"
    ],
    "npm:core-js@1.2.6/modules/es7.object.get-own-property-descriptors.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.own-keys.js",
      "npm:core-js@1.2.6/modules/$.to-iobject.js",
      "npm:core-js@1.2.6/modules/$.property-desc.js"
    ],
    "npm:core-js@1.2.6/modules/es7.map.to-json.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.collection-to-json.js"
    ],
    "npm:core-js@1.2.6/modules/es7.set.to-json.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.collection-to-json.js"
    ],
    "npm:core-js@1.2.6/modules/js.array.statics.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.ctx.js",
      "npm:core-js@1.2.6/modules/$.core.js"
    ],
    "npm:core-js@1.2.6/modules/web.timers.js": [
      "npm:core-js@1.2.6/modules/$.global.js",
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.invoke.js",
      "npm:core-js@1.2.6/modules/$.partial.js"
    ],
    "npm:core-js@1.2.6/modules/web.immediate.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.task.js"
    ],
    "npm:core-js@1.2.6/modules/$.export.js": [
      "npm:core-js@1.2.6/modules/$.global.js",
      "npm:core-js@1.2.6/modules/$.core.js",
      "npm:core-js@1.2.6/modules/$.hide.js",
      "npm:core-js@1.2.6/modules/$.redefine.js",
      "npm:core-js@1.2.6/modules/$.ctx.js"
    ],
    "npm:core-js@1.2.6/modules/$.partial.js": [
      "npm:core-js@1.2.6/modules/$.path.js",
      "npm:core-js@1.2.6/modules/$.invoke.js",
      "npm:core-js@1.2.6/modules/$.a-function.js"
    ],
    "npm:core-js@1.2.6/modules/web.dom.iterable.js": [
      "npm:core-js@1.2.6/modules/es6.array.iterator.js",
      "npm:core-js@1.2.6/modules/$.global.js",
      "npm:core-js@1.2.6/modules/$.hide.js",
      "npm:core-js@1.2.6/modules/$.iterators.js",
      "npm:core-js@1.2.6/modules/$.wks.js"
    ],
    "npm:core-js@1.2.6/modules/$.an-object.js": [
      "npm:core-js@1.2.6/modules/$.is-object.js"
    ],
    "npm:core-js@1.2.6/modules/$.object-define.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.own-keys.js",
      "npm:core-js@1.2.6/modules/$.to-iobject.js"
    ],
    "npm:core-js@1.2.6/modules/$.ctx.js": [
      "npm:core-js@1.2.6/modules/$.a-function.js"
    ],
    "npm:core-js@1.2.6/modules/$.object-assign.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.to-object.js",
      "npm:core-js@1.2.6/modules/$.iobject.js",
      "npm:core-js@1.2.6/modules/$.fails.js"
    ],
    "npm:core-js@1.2.6/modules/$.iter-create.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.property-desc.js",
      "npm:core-js@1.2.6/modules/$.set-to-string-tag.js",
      "npm:core-js@1.2.6/modules/$.hide.js",
      "npm:core-js@1.2.6/modules/$.wks.js"
    ],
    "npm:core-js@1.2.6/modules/$.keyof.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.to-iobject.js"
    ],
    "npm:core-js@1.2.6/modules/$.for-of.js": [
      "npm:core-js@1.2.6/modules/$.ctx.js",
      "npm:core-js@1.2.6/modules/$.iter-call.js",
      "npm:core-js@1.2.6/modules/$.is-array-iter.js",
      "npm:core-js@1.2.6/modules/$.an-object.js",
      "npm:core-js@1.2.6/modules/$.to-length.js",
      "npm:core-js@1.2.6/modules/core.get-iterator-method.js"
    ],
    "npm:core-js@1.2.6/modules/$.descriptors.js": [
      "npm:core-js@1.2.6/modules/$.fails.js"
    ],
    "npm:core-js@1.2.6/modules/$.to-iobject.js": [
      "npm:core-js@1.2.6/modules/$.iobject.js",
      "npm:core-js@1.2.6/modules/$.defined.js"
    ],
    "npm:core-js@1.2.6/modules/es6.promise.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.library.js",
      "npm:core-js@1.2.6/modules/$.global.js",
      "npm:core-js@1.2.6/modules/$.ctx.js",
      "npm:core-js@1.2.6/modules/$.classof.js",
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.an-object.js",
      "npm:core-js@1.2.6/modules/$.a-function.js",
      "npm:core-js@1.2.6/modules/$.strict-new.js",
      "npm:core-js@1.2.6/modules/$.for-of.js",
      "npm:core-js@1.2.6/modules/$.set-proto.js",
      "npm:core-js@1.2.6/modules/$.same-value.js",
      "npm:core-js@1.2.6/modules/$.wks.js",
      "npm:core-js@1.2.6/modules/$.species-constructor.js",
      "npm:core-js@1.2.6/modules/$.microtask.js",
      "npm:core-js@1.2.6/modules/$.descriptors.js",
      "npm:core-js@1.2.6/modules/$.redefine-all.js",
      "npm:core-js@1.2.6/modules/$.set-to-string-tag.js",
      "npm:core-js@1.2.6/modules/$.set-species.js",
      "npm:core-js@1.2.6/modules/$.core.js",
      "npm:core-js@1.2.6/modules/$.iter-detect.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:core-js@1.2.6/modules/$.path.js": [
      "npm:core-js@1.2.6/modules/$.global.js"
    ],
    "npm:core-js@1.2.6/modules/$.iter-define.js": [
      "npm:core-js@1.2.6/modules/$.library.js",
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.redefine.js",
      "npm:core-js@1.2.6/modules/$.hide.js",
      "npm:core-js@1.2.6/modules/$.has.js",
      "npm:core-js@1.2.6/modules/$.iterators.js",
      "npm:core-js@1.2.6/modules/$.iter-create.js",
      "npm:core-js@1.2.6/modules/$.set-to-string-tag.js",
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.wks.js"
    ],
    "npm:core-js@1.2.6/library/fn/object/values.js": [
      "npm:core-js@1.2.6/library/modules/es7.object.values.js",
      "npm:core-js@1.2.6/library/modules/$.core.js"
    ],
    "npm:babel-runtime@5.8.35/core-js/object/define-property.js": [
      "npm:core-js@1.2.6/library/fn/object/define-property.js"
    ],
    "npm:core-js@1.2.6/modules/$.shared.js": [
      "npm:core-js@1.2.6/modules/$.global.js"
    ],
    "npm:core-js@1.2.6/modules/$.set-to-string-tag.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.has.js",
      "npm:core-js@1.2.6/modules/$.wks.js"
    ],
    "npm:core-js@1.2.6/modules/$.get-names.js": [
      "npm:core-js@1.2.6/modules/$.to-iobject.js",
      "npm:core-js@1.2.6/modules/$.js"
    ],
    "npm:core-js@1.2.6/modules/$.enum-keys.js": [
      "npm:core-js@1.2.6/modules/$.js"
    ],
    "npm:core-js@1.2.6/modules/$.redefine.js": [
      "npm:core-js@1.2.6/modules/$.global.js",
      "npm:core-js@1.2.6/modules/$.hide.js",
      "npm:core-js@1.2.6/modules/$.uid.js",
      "npm:core-js@1.2.6/modules/$.core.js"
    ],
    "npm:core-js@1.2.6/modules/$.is-array.js": [
      "npm:core-js@1.2.6/modules/$.cof.js"
    ],
    "npm:core-js@1.2.6/modules/$.dom-create.js": [
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.global.js"
    ],
    "npm:core-js@1.2.6/modules/$.html.js": [
      "npm:core-js@1.2.6/modules/$.global.js"
    ],
    "npm:core-js@1.2.6/modules/$.to-object.js": [
      "npm:core-js@1.2.6/modules/$.defined.js"
    ],
    "npm:core-js@1.2.6/modules/$.to-index.js": [
      "npm:core-js@1.2.6/modules/$.to-integer.js"
    ],
    "npm:core-js@1.2.6/modules/$.iobject.js": [
      "npm:core-js@1.2.6/modules/$.cof.js"
    ],
    "npm:core-js@1.2.6/modules/$.to-length.js": [
      "npm:core-js@1.2.6/modules/$.to-integer.js"
    ],
    "npm:core-js@1.2.6/modules/$.array-methods.js": [
      "npm:core-js@1.2.6/modules/$.ctx.js",
      "npm:core-js@1.2.6/modules/$.iobject.js",
      "npm:core-js@1.2.6/modules/$.to-object.js",
      "npm:core-js@1.2.6/modules/$.to-length.js",
      "npm:core-js@1.2.6/modules/$.array-species-create.js"
    ],
    "npm:core-js@1.2.6/modules/$.array-includes.js": [
      "npm:core-js@1.2.6/modules/$.to-iobject.js",
      "npm:core-js@1.2.6/modules/$.to-length.js",
      "npm:core-js@1.2.6/modules/$.to-index.js"
    ],
    "npm:core-js@1.2.6/modules/$.set-proto.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.an-object.js",
      "npm:core-js@1.2.6/modules/$.ctx.js"
    ],
    "npm:core-js@1.2.6/modules/$.object-sap.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.core.js",
      "npm:core-js@1.2.6/modules/$.fails.js"
    ],
    "npm:core-js@1.2.6/modules/$.to-primitive.js": [
      "npm:core-js@1.2.6/modules/$.is-object.js"
    ],
    "npm:core-js@1.2.6/modules/$.is-integer.js": [
      "npm:core-js@1.2.6/modules/$.is-object.js"
    ],
    "npm:core-js@1.2.6/modules/$.string-trim.js": [
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.defined.js",
      "npm:core-js@1.2.6/modules/$.fails.js"
    ],
    "npm:core-js@1.2.6/modules/$.string-context.js": [
      "npm:core-js@1.2.6/modules/$.is-regexp.js",
      "npm:core-js@1.2.6/modules/$.defined.js"
    ],
    "npm:core-js@1.2.6/modules/$.fails-is-regexp.js": [
      "npm:core-js@1.2.6/modules/$.wks.js"
    ],
    "npm:core-js@1.2.6/modules/$.string-at.js": [
      "npm:core-js@1.2.6/modules/$.to-integer.js",
      "npm:core-js@1.2.6/modules/$.defined.js"
    ],
    "npm:core-js@1.2.6/modules/$.string-repeat.js": [
      "npm:core-js@1.2.6/modules/$.to-integer.js",
      "npm:core-js@1.2.6/modules/$.defined.js"
    ],
    "npm:core-js@1.2.6/modules/$.iter-call.js": [
      "npm:core-js@1.2.6/modules/$.an-object.js"
    ],
    "npm:core-js@1.2.6/modules/$.is-array-iter.js": [
      "npm:core-js@1.2.6/modules/$.iterators.js",
      "npm:core-js@1.2.6/modules/$.wks.js"
    ],
    "npm:core-js@1.2.6/modules/$.iter-detect.js": [
      "npm:core-js@1.2.6/modules/$.wks.js"
    ],
    "npm:core-js@1.2.6/modules/$.add-to-unscopables.js": [
      "npm:core-js@1.2.6/modules/$.wks.js",
      "npm:core-js@1.2.6/modules/$.hide.js"
    ],
    "npm:core-js@1.2.6/modules/$.set-species.js": [
      "npm:core-js@1.2.6/modules/$.global.js",
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.descriptors.js",
      "npm:core-js@1.2.6/modules/$.wks.js"
    ],
    "npm:core-js@1.2.6/modules/$.array-fill.js": [
      "npm:core-js@1.2.6/modules/$.to-object.js",
      "npm:core-js@1.2.6/modules/$.to-index.js",
      "npm:core-js@1.2.6/modules/$.to-length.js"
    ],
    "npm:core-js@1.2.6/modules/$.array-copy-within.js": [
      "npm:core-js@1.2.6/modules/$.to-object.js",
      "npm:core-js@1.2.6/modules/$.to-index.js",
      "npm:core-js@1.2.6/modules/$.to-length.js"
    ],
    "npm:core-js@1.2.6/modules/$.is-regexp.js": [
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.cof.js",
      "npm:core-js@1.2.6/modules/$.wks.js"
    ],
    "npm:core-js@1.2.6/modules/$.flags.js": [
      "npm:core-js@1.2.6/modules/$.an-object.js"
    ],
    "npm:core-js@1.2.6/modules/$.fix-re-wks.js": [
      "npm:core-js@1.2.6/modules/$.hide.js",
      "npm:core-js@1.2.6/modules/$.redefine.js",
      "npm:core-js@1.2.6/modules/$.fails.js",
      "npm:core-js@1.2.6/modules/$.defined.js",
      "npm:core-js@1.2.6/modules/$.wks.js"
    ],
    "npm:core-js@1.2.6/modules/$.collection-weak.js": [
      "npm:core-js@1.2.6/modules/$.hide.js",
      "npm:core-js@1.2.6/modules/$.redefine-all.js",
      "npm:core-js@1.2.6/modules/$.an-object.js",
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.strict-new.js",
      "npm:core-js@1.2.6/modules/$.for-of.js",
      "npm:core-js@1.2.6/modules/$.array-methods.js",
      "npm:core-js@1.2.6/modules/$.has.js",
      "npm:core-js@1.2.6/modules/$.uid.js"
    ],
    "npm:core-js@1.2.6/modules/$.collection.js": [
      "npm:core-js@1.2.6/modules/$.global.js",
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.redefine.js",
      "npm:core-js@1.2.6/modules/$.redefine-all.js",
      "npm:core-js@1.2.6/modules/$.for-of.js",
      "npm:core-js@1.2.6/modules/$.strict-new.js",
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.fails.js",
      "npm:core-js@1.2.6/modules/$.iter-detect.js",
      "npm:core-js@1.2.6/modules/$.set-to-string-tag.js"
    ],
    "npm:core-js@1.2.6/modules/$.collection-strong.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.hide.js",
      "npm:core-js@1.2.6/modules/$.redefine-all.js",
      "npm:core-js@1.2.6/modules/$.ctx.js",
      "npm:core-js@1.2.6/modules/$.strict-new.js",
      "npm:core-js@1.2.6/modules/$.defined.js",
      "npm:core-js@1.2.6/modules/$.for-of.js",
      "npm:core-js@1.2.6/modules/$.iter-define.js",
      "npm:core-js@1.2.6/modules/$.iter-step.js",
      "npm:core-js@1.2.6/modules/$.uid.js",
      "npm:core-js@1.2.6/modules/$.has.js",
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.set-species.js",
      "npm:core-js@1.2.6/modules/$.descriptors.js"
    ],
    "npm:core-js@1.2.6/modules/$.own-keys.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.an-object.js",
      "npm:core-js@1.2.6/modules/$.global.js"
    ],
    "npm:core-js@1.2.6/modules/$.string-pad.js": [
      "npm:core-js@1.2.6/modules/$.to-length.js",
      "npm:core-js@1.2.6/modules/$.string-repeat.js",
      "npm:core-js@1.2.6/modules/$.defined.js"
    ],
    "npm:core-js@1.2.6/modules/$.object-to-array.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.to-iobject.js"
    ],
    "npm:core-js@1.2.6/modules/$.collection-to-json.js": [
      "npm:core-js@1.2.6/modules/$.for-of.js",
      "npm:core-js@1.2.6/modules/$.classof.js"
    ],
    "npm:core-js@1.2.6/modules/$.hide.js": [
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.property-desc.js",
      "npm:core-js@1.2.6/modules/$.descriptors.js"
    ],
    "npm:core-js@1.2.6/modules/$.species-constructor.js": [
      "npm:core-js@1.2.6/modules/$.an-object.js",
      "npm:core-js@1.2.6/modules/$.a-function.js",
      "npm:core-js@1.2.6/modules/$.wks.js"
    ],
    "npm:core-js@1.2.6/modules/$.redefine-all.js": [
      "npm:core-js@1.2.6/modules/$.redefine.js"
    ],
    "npm:core-js@1.2.6/modules/$.task.js": [
      "npm:core-js@1.2.6/modules/$.ctx.js",
      "npm:core-js@1.2.6/modules/$.invoke.js",
      "npm:core-js@1.2.6/modules/$.html.js",
      "npm:core-js@1.2.6/modules/$.dom-create.js",
      "npm:core-js@1.2.6/modules/$.global.js",
      "npm:core-js@1.2.6/modules/$.cof.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:core-js@1.2.6/modules/$.microtask.js": [
      "npm:core-js@1.2.6/modules/$.global.js",
      "npm:core-js@1.2.6/modules/$.task.js",
      "npm:core-js@1.2.6/modules/$.cof.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "github:jspm/nodelibs-process@0.1.2.js": [
      "github:jspm/nodelibs-process@0.1.2/index.js"
    ],
    "npm:core-js@1.2.6/library/modules/es7.object.values.js": [
      "npm:core-js@1.2.6/library/modules/$.export.js",
      "npm:core-js@1.2.6/library/modules/$.object-to-array.js"
    ],
    "npm:core-js@1.2.6/library/fn/object/define-property.js": [
      "npm:core-js@1.2.6/library/modules/$.js"
    ],
    "npm:core-js@1.2.6/modules/$.array-species-create.js": [
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.is-array.js",
      "npm:core-js@1.2.6/modules/$.wks.js"
    ],
    "npm:core-js@1.2.6/library/modules/$.export.js": [
      "npm:core-js@1.2.6/library/modules/$.global.js",
      "npm:core-js@1.2.6/library/modules/$.core.js",
      "npm:core-js@1.2.6/library/modules/$.ctx.js"
    ],
    "npm:core-js@1.2.6/library/modules/$.object-to-array.js": [
      "npm:core-js@1.2.6/library/modules/$.js",
      "npm:core-js@1.2.6/library/modules/$.to-iobject.js"
    ],
    "github:jspm/nodelibs-process@0.1.2/index.js": [
      "npm:process@0.11.2.js"
    ],
    "npm:core-js@1.2.6/library/modules/$.ctx.js": [
      "npm:core-js@1.2.6/library/modules/$.a-function.js"
    ],
    "npm:core-js@1.2.6/library/modules/$.to-iobject.js": [
      "npm:core-js@1.2.6/library/modules/$.iobject.js",
      "npm:core-js@1.2.6/library/modules/$.defined.js"
    ],
    "npm:process@0.11.2.js": [
      "npm:process@0.11.2/browser.js"
    ],
    "npm:core-js@1.2.6/library/modules/$.iobject.js": [
      "npm:core-js@1.2.6/library/modules/$.cof.js"
    ],
    "app/components/value_hour.js": [
      "app/components/value_hour/value_hour.js"
    ],
    "app/components/value_hour/value_hour.js": [
      "npm:babel-runtime@5.8.35/helpers/create-class.js",
      "npm:babel-runtime@5.8.35/helpers/class-call-check.js",
      "app/components/value_hour/value_hour.less!github:rafaelfbs/systemjs-less-plugin@1.4.2.js",
      "npm:jquery@2.2.0.js",
      "app/utils/property.js"
    ],
    "app/components/burndown.js": [
      "app/components/burndown/burndown.js"
    ],
    "app/components/burndown/burndown.js": [
      "npm:babel-runtime@5.8.35/helpers/create-class.js",
      "npm:babel-runtime@5.8.35/helpers/class-call-check.js",
      "npm:jquery@2.2.0.js",
      "npm:lodash@4.5.0.js",
      "app/utils/property.js",
      "app/components/line.js",
      "app/components/value_hour.js"
    ],
    "npm:lodash@4.5.0.js": [
      "npm:lodash@4.5.0/lodash.js"
    ],
    "npm:lodash@4.5.0/lodash.js": [
      "github:jspm/nodelibs-buffer@0.1.0.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "github:jspm/nodelibs-buffer@0.1.0.js": [
      "github:jspm/nodelibs-buffer@0.1.0/index.js"
    ],
    "github:jspm/nodelibs-buffer@0.1.0/index.js": [
      "npm:buffer@3.6.0.js"
    ],
    "npm:buffer@3.6.0.js": [
      "npm:buffer@3.6.0/index.js"
    ],
    "npm:buffer@3.6.0/index.js": [
      "npm:base64-js@0.0.8.js",
      "npm:ieee754@1.1.6.js",
      "npm:isarray@1.0.0.js"
    ],
    "npm:ieee754@1.1.6.js": [
      "npm:ieee754@1.1.6/index.js"
    ],
    "npm:base64-js@0.0.8.js": [
      "npm:base64-js@0.0.8/lib/b64.js"
    ],
    "npm:isarray@1.0.0.js": [
      "npm:isarray@1.0.0/index.js"
    ],
    "app/utils/detourer.js": [
      "npm:babel-runtime@5.8.35/helpers/create-class.js",
      "npm:babel-runtime@5.8.35/helpers/class-call-check.js",
      "npm:lodash@4.5.0.js",
      "app/utils/property.js"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "core-js": "npm:core-js@1.2.6",
    "jquery": "npm:jquery@2.2.0",
    "less": "github:rafaelfbs/systemjs-less-plugin@1.4.2",
    "lodash": "npm:lodash@4.5.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:rafaelfbs/systemjs-less-plugin@1.4.2": {
      "less.js": "github:distros/less@2.4.0"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:align-text@0.1.4": {
      "kind-of": "npm:kind-of@3.0.2",
      "longest": "npm:longest@1.0.1",
      "repeat-string": "npm:repeat-string@1.5.2"
    },
    "npm:alter@0.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "stable": "npm:stable@0.1.5"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.10.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:ast-traverse@0.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:babel-core@5.8.35": {
      "babel-plugin-constant-folding": "npm:babel-plugin-constant-folding@1.0.1",
      "babel-plugin-dead-code-elimination": "npm:babel-plugin-dead-code-elimination@1.0.2",
      "babel-plugin-eval": "npm:babel-plugin-eval@1.0.1",
      "babel-plugin-inline-environment-variables": "npm:babel-plugin-inline-environment-variables@1.0.1",
      "babel-plugin-jscript": "npm:babel-plugin-jscript@1.0.4",
      "babel-plugin-member-expression-literals": "npm:babel-plugin-member-expression-literals@1.0.1",
      "babel-plugin-property-literals": "npm:babel-plugin-property-literals@1.0.1",
      "babel-plugin-proto-to-assign": "npm:babel-plugin-proto-to-assign@1.0.4",
      "babel-plugin-react-constant-elements": "npm:babel-plugin-react-constant-elements@1.0.3",
      "babel-plugin-react-display-name": "npm:babel-plugin-react-display-name@1.0.3",
      "babel-plugin-remove-console": "npm:babel-plugin-remove-console@1.0.1",
      "babel-plugin-remove-debugger": "npm:babel-plugin-remove-debugger@1.0.1",
      "babel-plugin-runtime": "npm:babel-plugin-runtime@1.0.7",
      "babel-plugin-undeclared-variables-check": "npm:babel-plugin-undeclared-variables-check@1.0.2",
      "babel-plugin-undefined-to-void": "npm:babel-plugin-undefined-to-void@1.1.6",
      "babylon": "npm:babylon@5.8.35",
      "bluebird": "npm:bluebird@2.10.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "chalk": "npm:chalk@1.1.1",
      "convert-source-map": "npm:convert-source-map@1.1.3",
      "core-js": "npm:core-js@1.2.6",
      "debug": "npm:debug@2.2.0",
      "detect-indent": "npm:detect-indent@3.0.1",
      "esutils": "npm:esutils@2.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs-readdir-recursive": "npm:fs-readdir-recursive@0.1.2",
      "globals": "npm:globals@6.4.1",
      "home-or-tmp": "npm:home-or-tmp@1.0.0",
      "is-integer": "npm:is-integer@1.0.6",
      "js-tokens": "npm:js-tokens@1.0.1",
      "json5": "npm:json5@0.4.0",
      "line-numbers": "npm:line-numbers@0.2.0",
      "lodash": "npm:lodash@3.10.1",
      "minimatch": "npm:minimatch@2.0.10",
      "output-file-sync": "npm:output-file-sync@1.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@1.0.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regenerator": "npm:regenerator@0.8.40",
      "regexpu": "npm:regexpu@1.3.0",
      "repeating": "npm:repeating@1.1.3",
      "resolve": "npm:resolve@1.1.7",
      "shebang-regex": "npm:shebang-regex@1.0.0",
      "slash": "npm:slash@1.0.0",
      "source-map": "npm:source-map@0.5.3",
      "source-map-support": "npm:source-map-support@0.2.10",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "to-fast-properties": "npm:to-fast-properties@1.0.1",
      "trim-right": "npm:trim-right@1.0.1",
      "try-resolve": "npm:try-resolve@1.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-inline-environment-variables@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-plugin-proto-to-assign@1.0.4": {
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:babel-plugin-runtime@1.0.7": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:babel-plugin-undeclared-variables-check@1.0.2": {
      "leven": "npm:leven@1.0.2"
    },
    "npm:babel-runtime@5.8.35": {
      "core-js": "npm:core-js@1.2.6",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babylon@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:base64-js@0.0.8": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:bluebird@2.10.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.10.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:brace-expansion@1.1.3": {
      "balanced-match": "npm:balanced-match@0.3.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.10.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.10.3",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:center-align@0.1.3": {
      "align-text": "npm:align-text@0.1.4",
      "lazy-cache": "npm:lazy-cache@1.0.3"
    },
    "npm:chalk@1.1.1": {
      "ansi-styles": "npm:ansi-styles@2.1.0",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.4",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.0",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:cliui@2.1.0": {
      "center-align": "npm:center-align@0.1.3",
      "right-align": "npm:right-align@0.1.3",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:commander@2.9.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commoner@0.10.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.9.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "detective": "npm:detective@4.3.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "iconv-lite": "npm:iconv-lite@0.4.13",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "q": "npm:q@1.4.1",
      "recast": "npm:recast@0.10.33",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:convert-source-map@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.10.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:decamelize@1.1.2": {
      "escape-string-regexp": "npm:escape-string-regexp@1.0.4"
    },
    "npm:defs@1.1.1": {
      "alter": "npm:alter@0.2.0",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-traverse": "npm:ast-traverse@0.1.1",
      "breakable": "npm:breakable@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "simple-fmt": "npm:simple-fmt@0.1.0",
      "simple-is": "npm:simple-is@0.2.0",
      "stringmap": "npm:stringmap@0.2.2",
      "stringset": "npm:stringset@0.2.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "tryor": "npm:tryor@0.1.2",
      "yargs": "npm:yargs@3.27.0"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:detect-indent@3.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "get-stdin": "npm:get-stdin@4.0.1",
      "minimist": "npm:minimist@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "repeating": "npm:repeating@1.1.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:detective@4.3.1": {
      "acorn": "npm:acorn@1.2.2",
      "defined": "npm:defined@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.10.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@6.2.3": {
      "bn.js": "npm:bn.js@4.10.3",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:esprima-fb@15001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima@2.7.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:fs-readdir-recursive@0.1.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:get-stdin@4.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:glob@5.0.15": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:globals@6.4.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:graceful-fs@4.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:home-or-tmp@1.0.0": {
      "os-tmpdir": "npm:os-tmpdir@1.0.1",
      "user-home": "npm:user-home@1.1.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:is-buffer@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:is-finite@1.0.1": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:is-integer@1.0.6": {
      "is-finite": "npm:is-finite@1.0.1"
    },
    "npm:js-tokens@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:json5@0.4.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:kind-of@3.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "is-buffer": "npm:is-buffer@1.1.2"
    },
    "npm:lazy-cache@1.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lcid@1.0.0": {
      "invert-kv": "npm:invert-kv@1.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:leven@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:line-numbers@0.2.0": {
      "left-pad": "npm:left-pad@0.0.3"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash@4.5.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.10.3",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:minimatch@2.0.10": {
      "brace-expansion": "npm:brace-expansion@1.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:minimatch@3.0.0": {
      "brace-expansion": "npm:brace-expansion@1.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:once@1.3.3": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:os-locale@1.4.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "lcid": "npm:lcid@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-tmpdir@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:output-file-sync@1.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.4.0",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-exists@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.10.3",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:q@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:recast@0.10.33": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.8.12",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3"
    },
    "npm:regenerator@0.8.40": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "commoner": "npm:commoner@0.10.4",
      "defs": "npm:defs@1.1.1",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "recast": "npm:recast@0.10.33",
      "through": "npm:through@2.3.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:regexpu@1.3.0": {
      "esprima": "npm:esprima@2.7.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "recast": "npm:recast@0.10.33",
      "regenerate": "npm:regenerate@1.2.1",
      "regjsgen": "npm:regjsgen@0.2.0",
      "regjsparser": "npm:regjsparser@0.1.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:regjsparser@0.1.5": {
      "jsesc": "npm:jsesc@0.5.0"
    },
    "npm:repeating@1.1.3": {
      "is-finite": "npm:is-finite@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:resolve@1.1.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:right-align@0.1.3": {
      "align-text": "npm:align-text@0.1.4"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map-support@0.2.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "source-map": "npm:source-map@0.1.32"
    },
    "npm:source-map@0.1.32": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@3.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.2"
    },
    "npm:try-resolve@1.0.1": {
      "module": "github:jspm/nodelibs-module@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:user-home@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:window-size@0.1.4": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:y18n@3.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:yargs@3.27.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelcase": "npm:camelcase@1.2.1",
      "cliui": "npm:cliui@2.1.0",
      "decamelize": "npm:decamelize@1.1.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os-locale": "npm:os-locale@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "window-size": "npm:window-size@0.1.4",
      "y18n": "npm:y18n@3.2.0"
    }
  }
});
