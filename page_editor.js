Blockly.JavaScript['page_settings'] = function(block) {
  var statements_page_header = Blockly.JavaScript.statementToCode(block, 'page_header');
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_background = Blockly.JavaScript.valueToCode(block, 'background', Blockly.JavaScript.ORDER_ATOMIC);
  var value_paragraph = Blockly.JavaScript.valueToCode(block, 'paragraph', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '...';
  return code;
};

Blockly.JavaScript['header'] = function(block) {
  var value_header_text = Blockly.JavaScript.valueToCode(block, 'header_text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '...';
  return code;
};

Blockly.JavaScript['color'] = function(block) {
  var colour_blue = block.getFieldValue('blue');
  var code = '...';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['text'] = function(block) {
  var text_text = block.getFieldValue('text');
  var code = '...';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
