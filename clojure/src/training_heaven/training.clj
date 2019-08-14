(ns training-heaven.training)

(defmacro awhen [exp & body]
          `(if ))

(awhen [1 2 3] (it 2)) ;=> 3

(awhen nil (println "Will never get here")) ;=> nil

(awhen 1 (awhen 2 [it]))
