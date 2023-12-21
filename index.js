$("#tab1").click(function(){
    // Your code here

    console.log("Button tab 1 clciked");
    $("#tab1").addClass("btnact");
    $("#tab2").removeClass("btnact");

    $("#tab2").addClass("tw");
    $("#tab1").removeClass("tw");




    $("#tab3").text("SSRs vision and mission has excellence in its very core. Driven by this aspiration, we have established a quality assurance system that ensures to continuously sustain and raise the bar of excellence – in our products and processes.  SSR takes pride in its products as they are guaranteed to be of superior quality that conforms to local and national standards and to the satisfaction of the customers. Our products pass through a thorough quality assurance process. This starts from selecting and inspecting raw materials to in-process quality control to quality inspection and testing of finished products. Our process assures product quality, consistency and traceability at every step.")
});

$("#tab2").click(function(){
    // Your code here

    console.log("Button tab 2 clciked");
     $("#tab1").removeClass("btnact");
     $("#tab2").removeClass("tw");
     $("#tab1").addClass("tw");


     $("#tab3").text("Customer satisfaction is what SSR Industry strives for and ensures in its products. In pursuit of maintaining and improving the set standards in manufacturing of steel, each product is viewed with the same care and passes through the same quality management from the starting material to the final inspection in different stages. Our quality assurance is an integral part of all aspects of the process flow, governing our daily work to an extent far beyond the requirements laid down in the applicable standards.")


    $("#tab2").addClass("btnact");
});