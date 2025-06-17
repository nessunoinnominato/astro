<script>
  let showModal = false;

  const openModal = () => showModal = true;
  const closeModal = () => showModal = false;

  const stopPropagation = e => e.stopPropagation();
  const handleKeyClose = e => {
    if (e.key === 'Escape') closeModal();
  };
</script>

<div class="text-center mb-40">
  <button
    type="button"
    class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
    on:click={openModal}
    aria-haspopup="dialog"
    aria-expanded={showModal}
    aria-controls="modal"
  >
    Visualizza opzioni
    <i data-feather="arrow-right" width="40px"></i>
  </button>
</div>

{#if showModal}
  <div
    id="modal"
    class="fixed inset-0 z-80 overflow-x-hidden overflow-y-auto bg-black/50 flex items-center justify-center"
    role="dialog"
    tabindex="-1"
    aria-labelledby="modal-label"
    on:click={closeModal}
    on:keydown={handleKeyClose}
  >
    <div
      class="bg-white border border-gray-200 rounded-xl shadow-2xs max-w-lg w-full m-3 sm:mx-auto overflow-hidden dark:bg-neutral-900 dark:border-neutral-800"
      on:click={stopPropagation}
      role="document"
    >
      <div class="p-4 sm:p-7">
        <div class="text-center">
          <h3 id="modal-label" class="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-neutral-200">Advanced features</h3>
          <div class="max-w-sm mx-auto">
            <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              "Compare to" Price, Bulk Discount Pricing, Inventory Tracking
              <button
                type="button"
                on:click={() => alert('Sign up action')}
                class="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500 ml-1"
              >
                Sign up here 
                
              </button>
            </p>
          </div>

          <div class="mt-5">
            <button
              type="button"
              class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              on:click={() => alert('Upgrade clicked')}
            >
              <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="..."/>
              </svg>
              Upgrade to get these features
            </button>
          </div>
        </div>

        <div class="mt-8 sm:mt-10 divide-y divide-gray-200 dark:divide-neutral-700">
          <!-- Feature block -->
          <div class="flex gap-x-7 py-5">
            <svg class="shrink-0 mt-1 size-7 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10"/>
              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
              <path d="M12 18V6"/>
            </svg>
            <div class="grow">
              <h3 class="font-semibold text-gray-800 dark:text-neutral-200">"Compare to" price</h3>
              <p class="text-sm text-gray-500 dark:text-neutral-500">
                Use this feature when you want to put a product on sale or show savings off suggested retail pricing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-end items-center gap-x-2 p-4 sm:px-7 border-t border-gray-200 dark:border-neutral-800">
        <button
          type="button"
          class="py-2 px-3 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
          on:click={closeModal}
        >
          Cancel
        </button>
        <button
          type="button"
          class="py-2 px-3 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
          on:click={() => alert('Upgrade now')}
        >
          Upgrade now
        </button>
      </div>
    </div>
  </div>
{/if}
