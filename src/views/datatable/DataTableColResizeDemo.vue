<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Column Resize</span></h1>
				<p>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized.
                    In "expand" mode, table width also changes along with the column width.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <h5>Fit Mode</h5>
                <DataTable :value="products" :resizableColumns="true" columnResizeMode="fit" showGridlines>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Expand Mode</h5>
                <DataTable :value="products" :resizableColumns="true" columnResizeMode="expand" showGridlines>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
                    <div class="p-d-flex p-jc-end">
                        <LiveEditor name="DataTableDemo" :sources="sources" service="ProductService" data="products-small" :components="['Column']" />
                    </div>
<pre v-code><code><template v-pre>
&lt;h3&gt;Fit Mode&lt;/h3&gt;
&lt;DataTable :value="products" :resizableColumns="true" columnResizeMode="fit" showGridlines&gt;
    &lt;Column field="code" header="Code"&gt;&lt;/Column&gt;
    &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
    &lt;Column field="category" header="Category"&gt;&lt;/Column&gt;
    &lt;Column field="quantity" header="Quantity"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;h3&gt;Expand Mode&lt;/h3&gt;
&lt;DataTable :value="products" :resizableColumns="true" columnResizeMode="expand" showGridlines&gt;
    &lt;Column field="code" header="Code"&gt;&lt;/Column&gt;
    &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
    &lt;Column field="category" header="Category"&gt;&lt;/Column&gt;
    &lt;Column field="quantity" header="Quantity"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script><code>
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            products: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    }
}

</code></pre>
                </TabPanel>
            </TabView>
        </div>
	</div>
</template>

<script>
import ProductService from '../../service/ProductService';
import LiveEditor from '../liveeditor/LiveEditor';

export default {
    data() {
        return {
            products: null,
            sources: {
                'template': {
                    content: `<template>
    <div class="layout-content">
        <div class="content-section implementation">
            <div class="card">
                <h5>Fit Mode</h5>
                <DataTable :value="products" :resizableColumns="true" columnResizeMode="fit" showGridlines>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Expand Mode</h5>
                <DataTable :value="products" :resizableColumns="true" columnResizeMode="expand" showGridlines>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
		</div>
    </div>
</template>

<script>
import ProductService from '../service/ProductService';

export default {
    data() {
        return {
            products: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    }
}`
                }
            }
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    },
    components: {
        LiveEditor
    }
}
</script>