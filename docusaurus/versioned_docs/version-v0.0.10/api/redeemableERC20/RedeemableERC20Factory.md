Factory for deploying and registering `RedeemableERC20` contracts.





## Functions
### `_createChild(bytes data_) → address` (internal)

Implements `IFactory`.

`_createChild` hook must be overridden to actually create child
contract.

Implementers may want to overload this function with a typed equivalent
to expose domain specific structs etc. to the compiled ABI consumed by
tooling and other scripts. To minimise gas costs for deployment it is
expected that the tooling will consume the typed ABI, then encode the
arguments and pass them to this function directly.





### `createChild(struct RedeemableERC20Config config_) → address` (external)

Allows calling `createChild` with `RedeemableERC20Config` struct.
Use original `Factory` `createChild` function signature if function
parameters are already encoded.





