import { Trace } from '@uirouter/angularjs';

export function run(
    $trace: Trace,
) {
// Enable to get verbose trace logging with the ui-router
  $trace.disable();
  // $trace.enable();
}
