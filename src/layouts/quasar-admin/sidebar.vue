<template>
  <q-list>
    <q-item to="/" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="fas fa-tachometer-alt" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Dashboard</q-item-label>
      </q-item-section>
    </q-item>
    <q-item to="/Dashboard2" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="fas fa-tachometer-alt" />
      </q-item-section>
      <q-item-section>
        <q-item-label>CRM Dashboard</q-item-label>
      </q-item-section>
    </q-item>
    <q-expansion-item icon="fas fa-file-lines" label="Pages">
      <q-list class="q-pl-lg">
        <q-item to="/Login-1" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="fas fa-envelope" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Login-1</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Lock" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="fas fa-lock" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Lock Screen</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Lock-2" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="fas fa-lock" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Lock Screen - 2</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Pricing" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="fas fa-list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Pricing</q-item-label>
          </q-item-section>
        </q-item>
        <q-item-label header class="text-weight-bolder text-white">Generic</q-item-label>
        <q-item to="/Profile" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="fas fa-user" />
          </q-item-section>
          <q-item-section>
            <q-item-label>User Profile</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Maintenance" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="fas fa-gear" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Maintenance</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>
    <q-expansion-item icon="fas fa-map" label="Maps">
      <q-list class="q-pl-lg">
        <q-item to="/Map" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="fas fa-map" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Map</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/MapMarker" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="fas fa-map-pin" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Map Marker</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/StreetView" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="fas fa-eye" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Street View</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>

    <q-item to="/Mail" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="fas fa-envelope" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Mail</q-item-label>
      </q-item-section>
    </q-item>

    <q-item to="/directory" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="fas fa-gift" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Directory</q-item-label>
      </q-item-section>
    </q-item>

    <q-item to="/TreeTable" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="fas fa-list" />
      </q-item-section>
      <q-item-section>
        <q-item-label>TreeTable</q-item-label>
      </q-item-section>
    </q-item>
    <q-item to="/Charts" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="fas fa-chart-bar" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Charts</q-item-label>
      </q-item-section>
    </q-item>
    <q-item to="/Footer" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="fas fa-circle-info" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Footer</q-item-label>
      </q-item-section>
    </q-item>
    <q-item to="/CardHeader" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="fas fa-address-card" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Card Header</q-item-label>
      </q-item-section>
    </q-item>
    <q-item to="/Cards" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="fas fa-address-card" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Cards</q-item-label>
      </q-item-section>
    </q-item>
    <q-item to="/Tables" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="fas fa-table" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Tables</q-item-label>
      </q-item-section>
    </q-item>
    <q-item to="/Contact" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="fas fa-user" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Contact</q-item-label>
      </q-item-section>
    </q-item>
    <q-item to="/Checkout" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="fa-regular fa-circle-check" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Checkout</q-item-label>
      </q-item-section>
    </q-item>

    <q-item to="/Calendar" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="fas fa-calendar-days" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Calendar</q-item-label>
      </q-item-section>
    </q-item>

    <q-item to="/Pagination" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="fas fa-calendar-days" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Pagination</q-item-label>
      </q-item-section>
    </q-item>
    <q-item to="/Ecommerce" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="fas fa-cart-shopping" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Product Catalogues</q-item-label>
      </q-item-section>
    </q-item>
    <q-expansion-item icon="fas fa-bars" label="Menu Levels">
      <q-item class="q-ml-xl" active-class="q-item-no-link-highlighting">
        <q-item-section>
          <q-item-label>Level 1</q-item-label>
        </q-item-section>
      </q-item>
      <q-expansion-item :header-inset-level="0.85" label="Level 2">
        <q-item
          class="q-ml-xl"
          style="margin-left: 55px !important"
          active-class="q-item-no-link-highlighting"
        >
          <q-item-section>
            <q-item-label>Level 2.1</q-item-label>
          </q-item-section>
        </q-item>
        <q-expansion-item :header-inset-level="1" label="Level 2.2">
          <q-item style="margin-left: 65px !important" active-class="q-item-no-link-highlighting">
            <q-item-section>
              <q-item-label>Level 2.2.1</q-item-label>
            </q-item-section>
          </q-item>
          <q-item style="margin-left: 65px !important" active-class="q-item-no-link-highlighting">
            <q-item-section>
              <q-item-label>Level 2.2.2</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-expansion-item>
    </q-expansion-item>
  </q-list>
</template>

<script lang="ts"></script>
